import { Fragment } from 'react';
import Banner from '../components/Banner';
import React from 'react'
import Highlights from '../components/Highlights';
import logo from '../logo.png';

export default function Home() {
	const data = {
    title: "Your one stop shop for everything coffee",
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

