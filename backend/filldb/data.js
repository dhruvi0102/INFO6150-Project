const rentalData = [
    {
      name: "Luxury Villa with Pool",
      rentalmodel: "host@luxuryvillas.com",
      rentalType: "cabin",
      rooms: "4",
      bathrooms: "3",
      price: "398.99",
      qt: "5",
      image:
        "https://www.luva-villas.com//img//news_11_crop_0_1671810979.webp"
    },
    {
      name: "Modern Beach House",
      rentalmodel: "host@beachhouses.com",
      rentalType: "mansion",
      rooms: "4",
      bathrooms: "4.5",
      price: "580.99",
      qt: "7",
      image:
        "https://www.homebunch.com/wp-content/uploads/2021/04/interior-design-ideas-Marn_SHIE_web_513.jpg",
    },
    {
      name: "Cozy Mountain Cabin",
      rentalmodel: "host@cabinrentals.com",
      rentalType: "cabin",
      rooms: "3",
      bathrooms: "2",
      price: "189.99",
      qt: "7",
      image:
        "https://www.cozymountaincabins.com/wp-content/uploads/2020/11/DancingBear-TwilightsGatlinburg-12-large-640x343.jpg",
    },
    {
      name: "Secluded Lakeside Cottage",
      rentalmodel: "host@cottagerentals.com",
      rentalType: "cabin",
      rooms: "5",
      bathrooms: "4",
      price: "899.99",
      qt: "7",
      image:
        "https://www-vacasa.imgix.net/New_York_lake.jpg?ar=1600%3A1200&auto=format%2Ccompress&fit=crop&ixlib=python-3.2.1&q=45&w=1080",
    },
    {
      name: "Rustic Farmhouse Retreat",
      rentalmodel: "host@farmhouses.com",
      rentalType: "cabin",
      rooms: "4",
      bathrooms: "4",
      price: "1399.99",
      qt: "10",
      image:
        "https://cdn.onekindesign.com/wp-content/uploads/2019/05/Rustic-Mountain-Farmhouse-Sandbox-Studio-01-1-Kindesign.jpg",
    },
    {
      name: "Downtown Loft Apartment",
      rentalmodel: "host@cityapartments.com",
      rentalType: "beachfront",
      rooms: "2",
      bathrooms: "2.5",
      price: "180.99",
      qt: "10",
      image:
        "https://www.uli.com/sites/default/files/styles/blog_1140x642/public/DJI_0298-HDR%20copy.jpg?itok=3Vwc3_Er",
    },
    {
      name: "Spacious Family Home",
      rentalmodel: "host@familyhomes.com",
      rentalType: "beachfront",
      rooms: "7",
      bathrooms: "9",
      price: "900.99",
      qt: "10",
      image:
        "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i215%2Fmxp212y3jaxa42pz1ew1n073k4i215&option=N&idlisting=listingmedia&w=1600&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fstatic-sothebys-sanmiguelsir-production-0.gtsstatic.net%2Fresources%2F_responsive%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg",
    },
    {
      name: "Country Estate",
      rentalmodel: "host@countryestates.com",
      rentalType: "beachfront",
      rooms: "7",
      bathrooms: "8",
      price: "1229.99",
      qt: "10",
      image:
        "https://img.etimg.com/thumb/msid-102041745,width-300,height-225,imgsize-119824,,resizemode-75/country-music-star-luke-bryans-florida-beach-house-gets-cheaper-check-price-facilities.jpg",
    },
    {
      name: "Urban Penthouse",
      rentalmodel: "host@urbanpenthouses.com",
      rentalType: "beachfront",
      rooms: "4",
      bathrooms: "5",
      price: "1999.99",
      qt: "7",
      image:
        "https://images.squarespace-cdn.com/content/v1/57916842bebafb827652722c/3e5fc7d6-a6c0-46af-801a-77281d4b3a9c/Kolter+Urban+Reveals+Selene+Oceanfront+Residences+Penthouse+Collection+In+Fort+Lauderdale+Beach?format=2500w",
    },
    {
      name: "Beachfront Mansion",
      rentalmodel: "host@beachcottages.com",
      rentalType: "mansion",
      rooms: "7",
      bathrooms: "6",
      price: "999.99",
      qt: "5",
      image:
        "https://robbreport.com/wp-content/uploads/2022/06/Aerial-11.jpg?w=1000",
    },
    {
      name: "Riverside Retreat Mansion",
      rentalmodel: "host@riversideretreats.com",
      rentalType: "mansion",
      rooms: "4",
      bathrooms: "4",
      price: "699.99",
      qt: "7",
      image:
        "https://gallery.streamlinevrs.com/units-gallery/00/07/4A/image_159371519.jpeg",
    },
    {
      name: "Quaint Farm Cottage Mansion",
      rentalmodel: "host@farmcottages.com",
      rentalType: "mansion",
      rooms: "4",
      bathrooms: "3",
      price: "299.99",
      qt: "7",
      image:
        "https://cdn.houseplansservices.com/content/1q64sel6shp8jd7238as5p4pct/w991x660.jpg?v=2",
    },
    {
      name: "Luxurious Mansion",
      rentalmodel: "host@luxmansionrentals.com",
      rentalType: "mansion",
      rooms: "9",
      bathrooms: "12",
      price: "899.99",
      qt: "7",
      image:
        "https://loveincorporated.blob.core.windows.net/contentimages/gallery/574bc9b2-d0e0-43e3-aa71-33287a758b15-f932a3fb-4621-4e69-967c-10151ecf7b28-la-mega-mansion-underground-secret.jpg",
    },
  ];
  
  const userData = [
    {
      name: "Dhruvi Bavaria",
      email: "bavari.d@northeastern.edu",
      password: "Dhruvi1234",
    },
    {
      name: "Heena Shah",
      email: "shah.heen@northeastern.edu",
      password: "Heena1234",
    },
    {
      name: "Rushabh Ukani",
      email: "ukani.r@northeastern.edu",
      password: "Rushabh1234",
    },
    {
      name: "Swapnil Salsankar",
      email: "salsankar.s@northeastern.edu",
      password: "Swapnil1234",
    },
  ];
  
  module.exports = {
    userData,
    rentalData,
  };
  