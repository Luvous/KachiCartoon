import React from 'react';
import NavBar from '../components/NavBar';


function Comics() {
    const COMICS =
        [
            {
                id: 0,
                src: "https://images.squarespace-cdn.com/content/v1/593f201de3df288fc6465e6f/1586376940389-4JJ3O5BM11QFZHAJKZ9M/BANG%21+%231.jpeg?format=1000w",
                title: "Bang"
            },
            {
                id: 1,
                src: "https://i0.wp.com/lh3.googleusercontent.com/-PrZfuVNrdyA/YFQtMbQVudI/AAAAAAABm0M/UG8_Paeu08MG6mTh8MkCZJiHpHRfSnDOgCK8BGAsYHg/s0/2021-03-18.png?ssl=1",
                title: "WYND"
            },
            {
                id: 2,
                src: "https://static01.nyt.com/images/2019/08/23/arts/15comics-once/15comics-once-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
                title: "Once & Future"
            },
            {
                id: 3,
                src: "https://i.imgur.com/yEmfTuR.jpeg",
                title: "Dune",
            },
            {
                id: 4,
                src: "https://nerdnightnews.com/wp-content/uploads/2022/05/Screenshot_20220520-093825_Gallery-672x1024.jpg",
                title: "Break/Out"
            }
        ]

    return (
        <section>
            <NavBar currentPath="comics" />
            <div className='comics-container'>
                {COMICS.map((i) => (
                    <a href={'/'+i.title} className='covers-items' key={i.id}>
                        <img src={i.src} />
                        <p>{i.title}</p>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Comics