import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const EditExercise = () => {
    const [modalOpen, setModalOpen] = useState(false);

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
                        day: undefined
                    }}>
                        <Form>
                            <Label htmlFor='day'>
                                Day
                            </Label>
                            <Field
                                name='day'
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
                            <Label htmlFor='name'>
                                Execise Name
                            </Label>
                            <Field
                                name='name'
                                placeholder='Exercise Name'
                                className='form-control'
                            />
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

export default EditExercise;