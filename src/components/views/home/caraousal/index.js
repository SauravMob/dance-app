import React, { useState } from 'react'
import tree from '../../../assets/images/tree.jpg'
import fantasy from '../../../assets/images/fantasy.jpg'
import forest from '../../../assets/images/forest.jpg'
import moon from '../../../assets/images/moon.jpg'
import secret from '../../../assets/images/secret.jpg'
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap'

const Carousel = () => {

    const images = [tree, fantasy, forest, moon, secret]
    const [activeAccordian, setActiveAccordian] = useState()
    const [open, setOpen] = useState({
        show: false,
        imgUrl: ''
    })

    const onExpandItem = (key, e) => {
        setActiveAccordian(key)
    }

    const ItemModal = () => {
        return (
            <Modal
                show={open.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setOpen({
                    ...open,
                    show: false
                })}
            >
                <Modal.Body style={{ backgroundColor: 'rgba(12, 8, 80, 1)' }}>
                    <Row>
                        <Col style={{ backgroundImage: `url(${open.imgUrl})` }}></Col>
                        <Col className='text-center p-3 text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae ullam incidunt quia enim architecto illo asperiores voluptate, voluptates, similique magnam aliquam quo ad pariatur aspernatur vel rem laborum. Perferendis facere, tempora necessitatibus veniam nobis consectetur dolorem deleniti nihil eveniet esse sed ipsum amet voluptatem voluptatibus non quos sapiente quasi nostrum error adipisci soluta rerum, laboriosam reiciendis nam! Ut ullam deleniti hic asperiores reiciendis amet voluptate obcaecati iste beatae nulla expedita quod accusantium ea qui quos, pariatur delectus culpa, a aperiam vero perspiciatis consectetur, illo minus modi. Iure, earum labore. Dolores ratione vitae consequuntur. Sunt, reiciendis obcaecati! Illum, asperiores molestiae illo esse, alias libero fuga tempora obcaecati odit consequuntur totam nostrum eaque quos voluptate earum voluptatum dolorem. Quasi, suscipit exercitationem eos ea illo cupiditate saepe iure possimus. Dolor, facere vitae culpa eos fugiat eveniet, laborum eius, temporibus numquam ab est fugit et nemo quidem eligendi ipsa error labore explicabo laboriosam! In, similique sapiente. Non, iste porro quis quaerat delectus corrupti commodi ab aliquid in atque voluptas quisquam asperiores, dolorem facilis
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }

    return (
        <>
            <div className='group'>
                {images.map((val, key) => {
                    return <>
                        <div
                            key={key}
                            className={`item ${activeAccordian ? (activeAccordian === val ? `active-url` : `unactive-url`) : ''}`}
                            style={{ backgroundImage: `url(${val})` }}
                            onMouseEnter={(e) => onExpandItem(val, e)}
                            onMouseLeave={(e) => setActiveAccordian()}
                            onClick={() => setOpen({ show: true, imgUrl: val })}
                        ></div>
                    </>
                })}
                <ItemModal />
            </div>
        </>
    )
}

export default Carousel