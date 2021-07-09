import React from 'react'
import { useState, useEffect } from "react";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid, } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CityService from "../../Services/cityService";
import JobTitleService from "../../Services/jobTitleService";
import WorkTypeService from "../../Services/workTypeService";
import WorkHourService from '../../Services/workHourService';


const colors = ["teal"];

export default function JobAdvertisementAdd() {

  const [cities, setCities] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [workHours, setWorkHours] = useState([]);

  useEffect(() => {

    let cityService = new CityService();
    cityService.getCities()
      .then(result => setCities(result.data.data))

    let jobTitleService = new JobTitleService();
    jobTitleService.getJobTitles()
      .then(result => setJobTitles(result.data.data))

    let workTypeService = new WorkTypeService();
    workTypeService.getWorkTypes()
      .then(result => setWorkTypes(result.data.data))

    let workHourService = new WorkHourService();
    workHourService.getWorkHours()
      .then(result => setWorkHours(result.data.data))

  }, [])

  const validationSchema = Yup.object({
    employer: Yup.string().required("İşveren bigisi zorunlu"),
    jobTitleId: Yup.number().required("Pozisyon bigisi zorunlu"),
    cityId: Yup.string().required("Şehir bilgisi zorunlu"),
    openPositionCount: Yup.number().required("Açık pozisyon sayısı zorunlu"),
    workTypeId: Yup.string().required("Çalışma Tipi Zorunlu"),
    description: Yup.string().required("Açıklama zorunlu"),
  });
  const formik = useFormik({

    initialValues: {
      employer: "",
      cityId: "",
      jobTitleId: "",
      workTypeId: "",
      description: "",
      openPositionCount: "",
    },
    validationSchema: validationSchema,


  });

  const cityOptions = cities.map((city) => ({
    key: city.id,
    value: city.id,
    text: city.city,
  }));


  const jobTitleOptions = jobTitles.map((jobTitle) => ({
    key: jobTitle.id,
    value: jobTitle.id,
    text: jobTitle.jobTitle,

  }));

  const workTypeOptions = workTypes.map((workType) => ({
    key: workType.id,
    value: workType.id,
    text: workType.workType,
  }));

  const workHourOptions = workHours.map((workHour) => ({
    key: workHour.id,
    value: workHour.id,
    text: workHour.workHour,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (

    <div>
      <div className="ui form" style={{ marginLeft: "10em", marginRight: "18em" }}>
        <Grid columns={1} padded>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <div>
              <Card fluid>
                <Card.Content header="İş ilanı" />
                <Card.Content>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column width={16}>
                          <Input
                            id="employer"
                            name="employer"
                            onChange={formik.handleChange}
                            value={formik.values.employer}
                            onBlur={formik.handleBlur}
                            type="string"
                            placeholder="İşveren"
                          />
                          {formik.errors.employer &&
                            formik.touched.employer && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.employer}
                              </div>
                            )}
                        </Grid.Column>

                      </Grid>
                    </Form.Field>

                    <Form.Field>
                      <Dropdown
                        clearable
                        item
                        placeholder="İş Pozisyonu seçiniz"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "jobTitleId")
                        }
                        onBlur={formik.onBlur}
                        id="jobTitleId"
                        value={formik.values.jobTitleId}
                        options={jobTitleOptions}
                      />
                      {formik.errors.jobTitleId &&
                        formik.touched.jobTitleId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.jobTitleId}
                          </div>
                        )}
                    </Form.Field>
                    <Form.Field>
                      <Dropdown
                        clearable
                        item
                        placeholder="Şehir Seçiniz"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "cityId")
                        }
                        onBlur={formik.onBlur}
                        id="cityId"
                        value={formik.values.cityId}
                        options={cityOptions}
                      />
                      {formik.errors.cityId && formik.touched.cityId && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.cityId}
                        </div>
                      )}
                    </Form.Field>
                    <Form.Field>
                      <Dropdown
                        clearable
                        item
                        placeholder="Çalışma Tipi Seçiniz"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "workTypeId")
                        }
                        onBlur={formik.onBlur}
                        id="workTypeId"
                        value={formik.values.workTypeId}
                        options={workTypeOptions}
                      />

                      {formik.errors.workTypeId &&
                        formik.touched.workTypeId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.workTypeId}
                          </div>
                        )}
                    </Form.Field>
                    <Form.Field>
                      <Dropdown
                        clearable
                        item
                        placeholder="Çalışma Süresi Seçiniz"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "workHourId")
                        }
                        onBlur={formik.onBlur}
                        id="workHourId"
                        value={formik.values.workHourId}
                        options={workHourOptions}
                      />

                      {formik.errors.workHourId &&
                        formik.touched.workHourId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.workHourId}
                          </div>
                        )}
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Form.Field>
                      <TextArea
                        placeholder="Açıklama"
                        error={Boolean(formik.errors.description).toString()}
                        value={formik.values.description}
                        name="description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.description &&
                        formik.touched.description && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.description}
                          </div>
                        )}
                    </Form.Field>
                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column width={6}>
                          <Input
                            id="openPositionCount"
                            name="openPositionCount"
                            onChange={formik.handleChange}
                            value={formik.values.openPositionCount}
                            onBlur={formik.handleBlur}
                            type="number"
                            placeholder="Açık Pozisyon sayısı"
                          />
                          {formik.errors.openPositionCount &&
                            formik.touched.openPositionCount && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.openPositionCount}
                              </div>
                            )}
                        </Grid.Column>

                      </Grid>
                    </Form.Field>

                    {colors.map((color) => (
                      <Button color={color} key={color}>Ekle</Button>

                    ))}
                  </Form>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}