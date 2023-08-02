import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Row,
  Col,
} from "reactstrap";
import { Formik, Field, Form } from "formik";

const AddExercise = ({ addExercise }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (values) => {
    const newExercise = {
      exerciseday: values.exerciseday,
      name: values.name,
      sets: values.sets,
      reps: values.reps,
    };
    console.log("New Exercise:", newExercise);
    setModalOpen(false);
    addExercise(newExercise);
  };
  return (
    <>
      <Button
        className="btn-outline-success"
        outline
        onClick={() => setModalOpen(true)}
      >
        Add Exercises
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader
          className="bg-success text-white"
          toggle={() => setModalOpen(false)}
        >
          Enter Execise Details
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              exerciseday: undefined,
              name: "",
              sets: "",
              reps: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="exerciseday">Day</Label>
                <Field name="exerciseday" as="select" className="form-control">
                  <option>Select...</option>
                  <option>M</option>
                  <option>T</option>
                  <option>W</option>
                  <option>Th</option>
                  <option>F</option>
                  <option>Sa</option>
                  <option>Su</option>
                </Field>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name" className="col-md-3">
                  Exercise Name
                </Label>
                <Field
                  name="name"
                  placeholder="Exercise Name"
                  className="form-control col-md-5"
                />
              </FormGroup>
              <Row>
                <Col className="col-md-6">
                  <FormGroup>
                    <Label htmlFor="sets">Sets</Label>
                    <Field
                      name="sets"
                      placeholder="Sets"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label htmlFor="reps">Reps</Label>
                    <Field
                      name="reps"
                      placeholder="Reps"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddExercise;
