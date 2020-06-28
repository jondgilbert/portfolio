import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import smartleaf from "../assets/images/smartleaf.jpg";
import profile from "../assets/images/profile.jpg";
import electronics from "../assets/images/electronics.jpg";

import Card from './Card.js';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Smartleaf',
                    subtitle: 'UCF Senior Design Project 2019',
                    imgSrc: smartleaf,
                    link: 'https://5dabcbb28138630006a1164d.onlosant.com/',
                    selected: false

                },
                {
                    id: 1,
                    title: 'Dev work',
                    subtitle: 'View my work on Github',
                    imgSrc: profile,
                    link: 'https://github.com/jondgilbert',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Maker things',
                    subtitle: 'DIY electronic projects',
                    imgSrc: electronics,
                    link: '#',
                    selected: false

                }
            ]
        }
    }

    handleCardClick = (id) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id)
                item.selected = false;
        });

        this.setState({items});
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>;
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;