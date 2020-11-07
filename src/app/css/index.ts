export const indexStyling = `
    <style>
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
        }
        
        .index_video {
            width: 100%;
        }
        
        .landing {
            width: 100%;
            background-image: url('/background-image.png');
            background-size: contain;
            background-position: top center;
            background-repeat: no-repeat;
        }
        
        .landing__header {
            position: absolute;
            width: 20%;
            min-width: 135px;
            border: 5px solid rgba(255, 255, 255, 0.85);
            background-color: rgba(216, 216, 216, 0);
            color: rgba(255, 255, 255, 0.85);
            padding: 1em 2em;
            top: 25px;
            left: 25px;
            font-size: 1.5vw;
            font-weight: 800;
            text-transform: uppercase;
            text-align: center;
        }
        
        .overflow {
            width: 100%;
            margin-top: -444px;
            position: relative;
            display: flex;
            flex-flow: column;
            overflow: visible;
        }
        
        .overflow__single {
            display: flex;
            flex-flow: row-reverse;
        }
        
        .overflow__multiple {
            display: flex;
            flex-wrap: wrap;
        }
        
        .navbar {
            margin-top: -1rem;
            display: flex;
        }
        
        .navbar__item {
            width: 25%;
            height: 220px;
            font-size: 20px;
            font-weight: 800;
            text-transform: uppercase;
            text-align: left;
            letter-spacing: 0.1em;
            color: black;
            opacity: 0.7;
            text-decoration: none;
        }
        
        .navbar__item:hover {
            cursor: pointer;
            opacity: 1;
            transition: opacity 0.4s;
            font-size: 23px;
            transition: font-size 0.4s;
        }
        
        .item__content {
            padding: 1em;
        }
        
        .transparent {
            background-color: rgba(255,0,88,0);
        }
        
        .yellow {
            background-color: #ffeb6e;
        }
        
        .green {
            background-color: #89ffbb;
        }
        
        .blue {
            background-color: #7fcdff;
        }
        
        .red {
            background-color: #ff7e97;
        }
        
        .black {
            background-color: #333333;
            color: white;
        }
        
        .white {
            background-color: white;
        }
        
        .to-top-button {
            position: fixed; /* Fixed/sticky position */
            bottom: 20px; /* Place the button at the bottom of the page */
            right: 30px; /* Place the button 30px from the right */
            z-index: 99; /* Make sure it does not overlap */
            border: none; /* Remove borders */
            outline: none; /* Remove outline */
            background-color: red; /* Set a background color */
            color: white; /* Text color */
            cursor: pointer; /* Add a mouse pointer on hover */
            padding: 15px; /* Some padding */
            border-radius: 10px; /* Rounded corners */
            font-size: 18px; /* Increase font size */
            text-decoration: none;
            opacity: 0.7;
        }
        
        .content {
            display: flex;
            flex-flow: column;
        }
        
        .content__section {
            display: flex;
            justify-content: center;
        }
        
        .section {
            width: 75%;
            max-width: 700px;
        }
        
        @media only screen and (max-width: 1000px)  {
            .landing__header {
                font-size: 15px;
            }
        
            .overflow {
                margin-top: -305px;
            }
        
            .navbar__item {
                font-size: 15px;
                height: 150px;
            }
        
            .navbar__item:hover {
                font-size: 17px;
            }
        }
        
        @media only screen and (max-width: 768px)  {
            .overflow {
                margin-top: -155px;
            }
        
            .navbar__item {
                width: 50%;
            }
        }
        
        @media only screen and (max-width: 500px)  {
            .landing__header {
                font-size: 11px;
                min-width: 100px;
                border: 2px solid rgba(255, 255, 255, 0.85);
            }
        }
    </style>
`;

