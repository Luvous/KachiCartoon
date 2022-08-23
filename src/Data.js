const comicsData = [
    {
        id: 4524129,
        src: "https://images.squarespace-cdn.com/content/v1/593f201de3df288fc6465e6f/1586376940389-4JJ3O5BM11QFZHAJKZ9M/BANG%21+%231.jpeg?format=1000w",
        title: "Bang"
    },
    {
        id: 6584921,
        src: "https://i0.wp.com/lh3.googleusercontent.com/-PrZfuVNrdyA/YFQtMbQVudI/AAAAAAABm0M/UG8_Paeu08MG6mTh8MkCZJiHpHRfSnDOgCK8BGAsYHg/s0/2021-03-18.png?ssl=1",
        title: "WYND"
    },
    {
        id: 2987125,
        src: "https://static01.nyt.com/images/2019/08/23/arts/15comics-once/15comics-once-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        title: "Once & Future"
    },
    {
        id: 3619384,
        src: "https://i.imgur.com/yEmfTuR.jpeg",
        title: "Dune",
    },
    {
        id: 4978461,
        src: "https://nerdnightnews.com/wp-content/uploads/2022/05/Screenshot_20220520-093825_Gallery-672x1024.jpg",
        title: "Break/Out"
    },
    {
        id: 9794556,
        src: "https://2.bp.blogspot.com/2CJijySKsgH8ReMZbYmfsponK6zXOJKXvaj74-BgfK1uNrxnrES7qAx5ucPYmtku31-cbTXV1BQ5Uh9AOTZRGRRmDrG94LMEuu3Voufz_u8e_DWvWYCoKcR4dJpIRfqJwgihNgqrcw=s1600?rhlupa=MjAwMTo2N2M6MjYyODo2NDc6MTI6OmU=&rnvuka=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjUwNjAuMTM0IFNhZmFyaS81MzcuMzYgT1BSLzg5LjAuNDQ0Ny4xMDE=",
        title: "Tom & Jerry",
        pages:[
            'https://2.bp.blogspot.com/2CJijySKsgH8ReMZbYmfsponK6zXOJKXvaj74-BgfK1uNrxnrES7qAx5ucPYmtku31-cbTXV1BQ5Uh9AOTZRGRRmDrG94LMEuu3Voufz_u8e_DWvWYCoKcR4dJpIRfqJwgihNgqrcw=s1600?rhlupa=MjAwMTo2N2M6MjYyODo2NDc6MTI6OmU=&rnvuka=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjUwNjAuMTM0IFNhZmFyaS81MzcuMzYgT1BSLzg5LjAuNDQ0Ny4xMDE=',
            'https://2.bp.blogspot.com/BwIYqcpAT4TxNW8JW_NhM5yt6Ls1M7bqSZ34tqbwqM3HMB7icjw7DS4MRcTR3NQIORHdTLYK9M1YgzSuqJEwyzvo54BXnxAzAhjfnACSChoL2XGFAyy6OGep52-RSTHrrJ3URdqKZg=s1600?rhlupa=MjAwMTo2N2M6MjYyODo2NDc6MTI6OmU=&rnvuka=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjUwNjAuMTM0IFNhZmFyaS81MzcuMzYgT1BSLzg5LjAuNDQ0Ny4xMDE=',
            'https://2.bp.blogspot.com/Yptc7DbwYnp1OmStPDZ9n5k7r8D38r31g3MRy3n4UmqxApk15Afn4bRAU56WmSJUf6yCtHXwVnVTWuWrB2P6rjUl2X_BkNrr811goxgK47lVLVYh-sPNAofiiikes5LFld4CBuM-lA=s1600?rhlupa=MjAwMTo2N2M6MjYyODo2NDc6MTI6OmU=&rnvuka=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjUwNjAuMTM0IFNhZmFyaS81MzcuMzYgT1BSLzg5LjAuNDQ0Ny4xMDE='
        ]
    }

]

export function getComics(){
    return comicsData;
}

export function getComic(number) {
    return comicsData.find(
      (i) => i.id == number
    );
  }
  