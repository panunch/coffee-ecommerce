import { Fragment } from 'react';
import Banner from '../components/Banner';
import React from 'react'
import Highlights from '../components/Highlights';

export default function Home() {
	const data = {
    title: "The Weird Coffee Person Consortium",
    content: "We're nuts about coffee. :)",
    destination: "/products",
    label: "Shop Now!"
}

return (
    <React.Fragment>
        <Banner data={data}/>
        <Highlights />
    </React.Fragment>
)


}

