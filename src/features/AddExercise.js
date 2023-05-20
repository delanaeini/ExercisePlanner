import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const AddExercise = ({addExercise}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const newExercise = {
            exerciseday : values.exerciseday,
            name : values.name
        };
        console.log('New Exercise:', newExercise);
        setModalOpen(false);
        addExercise(newExercise);
    }
    return(
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Exercises
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader className='bg-success text-white' toggle={() => setModalOpen(false)}>
                    Enter Execise Details
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={{
                        exerciseday: undefined,
                        name: ''
                    }}
                    onSubmit={handleSubmit}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='exerciseday'>
                                    Day
                                </Label>
                                <Field
                                    name='exerciseday'
                                    as='select'
                                    className='form-control'
                                >
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
                                <Label htmlFor='name'>
                                    Exercise Name
                                </Label>
                                <Field
                                    name='name'
                                    placeholder='Exercise Name'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default AddExercise;