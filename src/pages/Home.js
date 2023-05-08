import { Fragment } from 'react';
import Banner from '../components/Banner';
import React from 'react'
import Highlights from '../components/Highlights';

export default function Home() {
	const data = {
    title: "Zuitt Coding Bootcamp",
    content: "Opportunities for everyone, everywhere",
    destination: "/courses",
    label: "Enroll now!"
}

return (
    <React.Fragment>
        <Banner data={data}/>
        <Highlights />
    </React.Fragment>
)


}

