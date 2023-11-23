function AppCarousel()
{
    return(
        <section>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Free-Professional-Banner-Template-scaled.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Free-Professional-Banner-Template-scaled.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Free-Professional-Banner-Template-scaled.jpg" className="d-block w-100" alt="..."/>
                </div>
              </div>
            </div>
         </section>
    )
}

export default AppCarousel;