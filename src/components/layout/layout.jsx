import React from "react";
import {Link, Outlet} from "react-router-dom";
import image1 from "../../carousel-images/image1.jpg";
import "./layout.css";

function Application() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">MCUfans</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#product" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product Categories
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/"><a class="dropdown-item" href="#products">All categories</a></Link></li>
                                    <li><a class="dropdown-item" href="#">Spider-Man</a></li>
                                    <li><Link to="/ironman"><a class="dropdown-item" href="#outlet">Iron-Man</a></Link></li>
                                    <li><a class="dropdown-item" href="#">Avengers</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="carouselExampleSlidesOnly" class="image slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image1} class="image1 d-block w-100" alt="carousel" />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>MCUfans Tees</h1>
                            <h3>Here you will get all fame based t-shirts of marvel in one site</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet id="outlet"/>
        </>
    )
}

export default Application;