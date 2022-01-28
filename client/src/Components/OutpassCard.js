import {Card, CardBody, CardTitle, CardSubtitle, CardText, Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap';
import OutpassModal from './OutpassModal';
import {useState} from 'react'

const OutpassCard = (props) => {
    console.log(props.outpass.firstname)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
    <>
        <Card style={{ width: "400px", margin: "2% 0% 2% 12%", display: "flex", justifyContent: "center" }}>
            <CardBody>
                <CardTitle tag="h5">
                    {props.outpass.firstname + " " + props.outpass.lastname}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {props.outpass.regno}
                </CardSubtitle>
                {/* <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText> */}
                <Button onClick={toggleModal}>
                    Button
                </Button>
            </CardBody>
        </Card>
            <div>
                 <Modal isOpen={isModalOpen} centered scrollable size="xl" toggle={toggleModal} >
                <ModalHeader toggle={toggleModal}>
                    Outpass Id : {props.outpass._id}
                </ModalHeader>
                <ModalBody>
                    <OutpassModal/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={function noRefCheck() { }} >
                        Do Something
                    </Button>
                    <Button onClick={function noRefCheck() { }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            </div>
  </>      
    )
}

export default OutpassCard;