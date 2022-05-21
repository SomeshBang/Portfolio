<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- Icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- MY CSS -->
    <link rel="stylesheet" href="assets/css/style.css">

    <title>Portfolio</title>
</head>

<body>
    <div class="mainbackground">
        <!-- Navbar -->
        <div class="navcls">
        <nav class="navbar sticky-top navbar-expand-lg ">
            <a class="navbar-brand" href="#">Portfolio</a>

            <button class="navbar-toggler menubutton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="margin-right: 50px;">
            <span class="navbar-toggler-icon">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                <!-- <li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li> -->
                <li class="nav-item navright"><a class="nav-link navhover" href="#about" style="color: #fbff00;">About Me</a></li>
                <li class="nav-item navright"><a class="nav-link navhover" href="#skills" style="color: #fbff00;">Skills</a></li>
                <li class="nav-item navright"><a class="nav-link navhover" href="#project" style="color: #fbff00;">Projects</a></li>
                <li class="nav-item navright"><a class="nav-link navhover" href="#contact" style="color: #fbff00;">Contact</a></li>
                <li class="nav-item navright"><a class="nav-link navhover" style="color: #fbff00;" href="assets/Somesh Resume.pdf" download>
                    <i class="fa-solid fa-download"></i> Resume</a></li>
                <li> 
                    <input type="checkbox" id="darklight" class="themebtn" onclick="themeChange ()">
                    <label for=darklight class="dlthemebtn"></label>
                </li>
                </ul>
            </div>
        </nav>

        <div>
            <p>
            <h1 class="formatetxt">Somesh Bang</h1>
            <span class="xtypewrite">I'am</span>
            <span href="" class="typewrite " data-period="2000" data-type='[ " Developer.... ", " Freelancer....", " Web Designer....", " Trader...." ]'>
                <span class="wrap"></span>
            </span>
            </p>
        </div>
        </div>  
        <!-- Navbar ends -->
    
    <!-- About Part -->
        <section id="about">
            <h1 class="lne">About Me</h1>
            <img class="myimg" src="assets/img/myimg.jpg">
            <p class="mydesc"> 
                <span style="font-size: 38px; font-family: 'Pacifico', cursive;">H</span>
                ello, I'm currently an undergraduate student and fresher. I'm a Full Stack Developer with a special passion for Python Developing, and I also have an interest in Web technologies, ML, AI, Hacking and Cybersecurity. I'm currently learning more about Python, and I strongly believe in doing than saying...
            </p>
            <p>
            <ul class="details namelne">
                <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss" style="--fa-animation-duration: 1.0s; "></i> Name : Somesh Bang</li>
                <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss" style="--fa-animation-duration: 1.0s; "></i> Email : bangsomesh060801@gmail.com</li>
                <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss" style="--fa-animation-duration: 1.0s; "></i> Phone No : +91 7972558842</li>
                <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss" style="--fa-animation-duration: 1.0s; "></i> Degree : BCA (Bachelor of Computer Applications.)</li>
                <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss" style="--fa-animation-duration: 1.0s; "></i> College : Zulal Bhilajirao Patil College affiliated to the <u>KBC North Maharashtra University</u></li>
                <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss" style="--fa-animation-duration: 1.0s; "></i> City : Dhule,Maharashtra.</li>
            </ul>
            </p>

            <div class="container" style="margin-top: 23vw;">
                <div class="row">
                <div class="col-sm-10 mt-2 mx-auto flip-card">
                    <div class="card flip-card-inner" style="border:0px solid rgba(0,0,0,.125)">
                    <div class="card-body flip-card-front">
                        <h3 class="card-title educ">
                            <i class="fa-solid fa-graduation-cap"></i>
                            Education
                            <i class="fa-solid fa-book-open"></i>
                        </h3>
                        <p class="card-text educdesc">
                            <span class="edu">BCA (Bachelor of Computer Applications)</span><br>
                            <span style="font-size: 1.0rem;">Zulal Bhilajirao Patil College, affiliated to KBC North Maharashtra University, Dhule.</span><br>
                            <span style="font-size: 0.8rem; font-style: italic;">07/2019 - 06/2022</span><br>
                            <span style="font-size: 0.8rem; font-style: italic;"> Grade = 9.00 CGPA</span>
                        </p>
                    </div>
                    <div class="flip-card-back">
                        <p class="card-text educdesc" style="margin-top: 25px; margin-left: 10px; margin-right: 10px; text-align: left;">
                            <span class="edu">HSC Board - Science</span> <span class="edu" style="float: right;">SSC Board - Science</span><br>
                            <span style="font-size: 1.0rem;">SSVPS's Dr. P. R. Ghogrey Science College,Dhule.</span><span style="font-size: 1.0rem; float: right;">Chavara English Medium High School,Dhule.</span><br>
                            <span style="font-size: 0.8rem; font-style: italic;">07/2017 - 05/2019</span><span style="font-size: 0.8rem; font-style: italic; float: right;">07/2007 - 05/2017</span><br>
                            <span style="font-size: 0.8rem; font-style: italic;"> Grade = 52.31%</span><span style="font-size: 0.8rem; font-style: italic; float: right;"> Grade = 67.20%</span><br>
                            <br>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </section>
        <!-- About Part End -->

        <!-- Skills -->

        <section id="skills" style="margin-top:5vw;">
            <h1 class="lne"> Skills </h1>
                        
            <div class="container">
                <div class="row">
                <div class="col-sm-4 mt-2">
                    <div class="card cdeffect">
                    <div class="card-body cardbg">
                        <h5 class="card-title cdtitle"><i class="fa-brands fa-python fa-xl"></i> Python 3</h5>
                        <p class="card-text cddesc">
                            Django | Tkinter | PyTorch | Django | MongoDB | Pandas | BeautifulSoup | Numpy | OpenCV | Matplotlib | Sqlite3 | 
                            Math | Web2py | Regular Expression(regex) | TensorFlow | Jupyter Notebook | Google colabs | PIP
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 mt-2">
                    <div class="card cdeffect">
                    <div class="card-body cardbg">
                        <h5 class="card-title cdtitle">
                            <img src="https://img.icons8.com/ios-filled/40/000000/c-plus-plus-logo.png"/>
                            C Family
                            <img src="https://img.icons8.com/ios-filled/40/000000/c-sharp-logo.png"/>
                        </h5>
                        <p class="card-text cddesc">
                            C | C++ | C# | OpenGL | .NET Framework | Selenium | .NET Core
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 mt-2">
                    <div class="card cdeffect">
                    <div class="card-body cardbg">
                        <h5 class="card-title cdtitle">
                            <i class="fa-brands fa-html5 fa-xl"></i>
                            HTML & CSS
                            <i class="fa-brands fa-css3-alt fa-xl"></i>
                        </h5>
                        <p class="card-text cddesc">
                            HTML5 | CSS3 | Bootstrap | React.JS | jQuery | Tailwind CSS | Skeleton
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 mt-5">
                    <div class="card cdeffect">
                    <div class="card-body cardbg">
                        <h5 class="card-title cdtitle">
                            <i class="fa-brands fa-js fa-xl"></i>
                            JavaScript
                        </h5>
                        <p class="card-text cddesc">
                            JavaScript | TypesSript | AngularJS | React | Vue.JS | Node.JS
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 mt-5">
                    <div class="card cdeffect">
                    <div class="card-body cardbg">
                        <h5 class="card-title cdtitle">
                            <i class="fa-brands fa-java fa-xl"></i>
                            Java
                        </h5>
                        <p class="card-text cddesc">
                            Java Standard libraries | Maven | Google-json | XML | HTTP Libraries | Spring | Hibernate
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 mt-5">
                    <div class="card cdeffect">
                    <div class="card-body cardbg">
                        <h5 class="card-title cdtitle">
                            <i class="fa-solid fa-database fa-lg"></i>
                            Other Skills
                            <img src="https://img.icons8.com/material-outlined/45/000000/mysql-logo.png"/>
                        </h5>
                        <p class="card-text cddesc">
                            MySql | Sql | SQlite | Kali Linux | Parrot OS | Windows 7,8,9,10 | VS Code | Atom | Eclipse | Android Studio | Ms Office | 
                            Command Shell(cmd) | Bash | Powershell | GitHub
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <!-- Skills End -->

        <!-- Project -->

        <section id="project" style="margin-top:5vw;">
            <h1 class="lne"> My Work </h1>

            <div class=container>
                    <div class="row" style="margin-top: -37px;">
                    <div class="projbox col-sm-6 mt-5">
                        <img src="assets/img/1.png" alt="Nature" class="projimg">
                        <div class="text-box">
                            <h4 class="projname"><a href="https://github.com/SomeshBang/Python_Project/tree/main/Moneycontrol%20Research%20Report"> 
                                Money Control Stock Research </a> <a href="https://github.com/SomeshBang/Python_Project/tree/main/Moneycontrol%20Research%20Report"><button type="button" class="btn btn-outline-light" style="border-radius: 17px; border: black;"><i class="fa-brands fa-github fa-xl"></i></button></a></h4>
                                <hr style="height: 2px; color: white; opacity: 100%;">
                            <p class="projdesc">Python | BeautifulSoup | Tkinter | Sorting Algorithm  </p>
                            </button>
                        </div>
                    </div>

                    <div class="projbox col-sm-6 mt-5">
                        <img src="assets/img/2.png" alt="Nature" class="projimg">
                        <div class="text-box">
                            <h4 class="projname"><a href="https://github.com/SomeshBang/Python_Project/tree/main/Restaurant%20Counter%20using%20python"> 
                                Restaurant Counter </a> <a href="https://github.com/SomeshBang/Python_Project/tree/main/Restaurant%20Counter%20using%20python"><button type="button" class="btn btn-outline-light" style="border-radius: 17px; border: black;"><i class="fa-brands fa-github fa-xl"></i></button></a></h4> 
                                <hr style="height: 2px; color: white; opacity: 100%;">
                            <p class="projdesc">Python | Math | Tkinter </p>
                        </div>
                    </div>

                    <div class="projbox col-sm-6 mt-5">
                        <img src="assets/img/3.png" alt="Nature" class="projimg">
                        <div class="text-box">
                            <h4 class="projname"><a href="https://github.com/SomeshBang/Python_Project/tree/main/Image%20Viewer%20Using%20Tkinter"> 
                                Image Viewer App </a> <a href="https://github.com/SomeshBang/Python_Project/tree/main/Image%20Viewer%20Using%20Tkinter"><button type="button" class="btn btn-outline-light" style="border-radius: 17px; border: black;"><i class="fa-brands fa-github fa-xl"></i></button></a></h4> 
                                <hr style="height: 2px; color: white; opacity: 100%;">
                            <p class="projdesc">Python | ImageTK | Tkinter </p>
                        </div>
                    </div>

                    <div class="projbox col-sm-6 mt-5">
                        <img src="assets/img/4.png" alt="Nature" class="projimg">
                        <div class="text-box">
                            <h4 class="projname"><a href="https://github.com/SomeshBang/College_Project"> 
                                Libarary Management </a> <a href="https://github.com/SomeshBang/College_Project"><button type="button" class="btn btn-outline-light" style="border-radius: 17px; border: black;"><i class="fa-brands fa-github fa-xl"></i></button></a></h4> 
                                <hr style="height: 2px; color: white; opacity: 100%;">
                            <p class="projdesc">PHP | CSS | MySql | JavaScript</p>
                        </div>
                    </div>

                    <div class="projbox col-sm-6 mt-5">
                        <img src="assets/img/5.png" alt="Nature" class="projimg">
                        <div class="text-box">
                            <h4 class="projname"><a href="https://someshbang.github.io/Portfolio/"> 
                                Portfolio Website </a> <a href="https://github.com/SomeshBang/Portfolio"><button type="button" class="btn btn-outline-light" style="border-radius: 17px; border: black;"><i class="fa-brands fa-github fa-xl"></i></button></a></h4> 
                                <hr style="height: 2px; color: white; opacity: 100%;">
                            <p class="projdesc">HTML | CSS | JavaScript </p>
                        </div>
                    </div>

                    <div class="projbox col-sm-6 mt-5">
                        <img src="assets/img/6.png" alt="Nature" class="projimg">
                        <div class="text-box">
                            <h4 class="projname"><a href="https://github.com/SomeshBang"> 
                                More Project on Github </a></h4> 
                                <hr style="height: 2px; color: white; opacity: 100%;">
                            <p class="projdesc">Take a look on my other work <a href="https://github.com/SomeshBang"><button type="button" class="btn btn-outline-light" style="border-radius: 17px; border: black;"><i class="fa-solid fa-arrow-up-right-from-square fa-xl"></i></button></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Project End -->

        <!-- Certificate -->
        <section id=" " style="margin-top:5vw;">
            <h1 class="lne"> Certification </h1>

            <div class="cefcard-container">

                    <div class="card_cef">
                        <img src="assets/img/cef_goog.JPG" class="cef_img">
                        <header class="article-header">
                            <h2 class="article-title">
                                Fundamentals of Digital Marketing
                            </h2>
                            <div class="caption"> 
                                - by Google
                            </div>
                        </header>
                        <div class="cef-id"> 
                            ID - 598 8N5 SYC
                        </div>
                        <a href="https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code" class="cef_btn2">Check Certificate <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
                    </div>
                    <div class="card_cef">
                        <img src="assets/img/cef_lp.JPG" class="cef_img">
                        <header class="article-header">
                            <h2 class="article-title">
                                Learning Python
                            </h2>
                            <div class="caption"> 
                                -by Linkedin
                            </div>
                        </header>
                        <div class="cef-id"> 
                            ID - ATS6Z5oEvb8yB7HTx7gtC8EnxV0s
                        </div>
                        <a href=" " class="cef_btn2">Check Certificate <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
                    </div>
                    <div class="card_cef">
                        <img src="assets/img/cef_guvip.JPG" class="cef_img">
                        <header class="article-header">
                            <h2 class="article-title">
                                Python
                            </h2>
                            <div class="caption"> 
                                -by GUVI
                            </div>
                        </header>
                        <a href="https://www.guvi.in/verify-certificate?id=2m8SI10R3J1b42826Z" class="cef_btn2">Check Certificate <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
                    </div>
                    <div class="card_cef">
                        <img src="assets/img/cef_tcsce.JPG" class="cef_img">
                        <header class="article-header">
                            <h2 class="article-title">
                                Career Edge - Young Professional
                            </h2>
                            <div class="caption"> 
                                - by TCS iON
                            </div>
                        </header>
                        <div class="cef-id"> 
                            ID - 119854-16662498-1016
                        </div>
                        <a href="https://learning.tcsionhub.in/LX/ecertificate/verification" class="cef_btn2">Check Certificate <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
                    </div>
                    <div class="card_cef">
                        <img src="assets/img/cef_cpfe.JPG" class="cef_img">
                        <header class="article-header">
                            <h2 class="article-title">
                                Python for Everybody
                            </h2>
                            <div class="caption"> 
                                -by Coursera (University of Michigan)
                            </div>
                        </header>
                        <a href="coursera.org/verify/specialization/RYZEFETRCKKB" class="cef_btn2">Check Certificate <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
                    </div>
                    <div class="card_cef">
                        <img src="assets/img/cef_dbpy.JPG" class="cef_img">
                        <header class="article-header">
                            <h2 class="article-title">
                                Using Databases with Python
                            </h2>
                            <div class="caption"> 
                                -by Coursera (University of Michigan)
                            </div>
                        </header>
                        <a href="coursera.org/verify/J5FSYGWUPPVM" class="cef_btn2">Check Certificate <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
                    </div>
                    <div class="card_cef">
                        <img src="assets/img/cef_dspy.JPG" class="cef_img">
                        <header class="article-header">
                            <h2 class="article-title">
                                Python Data Structures
                            </h2>
                            <div class="caption"> 
                                -by Coursera (University of Michigan)
                            </div>
                        </header>
                        <a href="coursera.org/verify/R75RPBGNBCEU" class="cef_btn2">View Certificate <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
                    </div>

                </div>
            </section>
    <!-- Certificate End -->

    <!-- Contact Me -->
    <section id="contact">
        <div class="container-fluid bgcontact" style="border-bottom: solid;">
            <h2 class="contactcls">Connect...!</h2>
            <!-- margintop -->

        <div class="alignicon">
            <ul class="product">
                <a style="margin-right: 10px; margin-left: 10px;" href="https://github.com/SomeshBang"><i class="fa-brands fa-github fa-3x growicon"></i></a>
                <a style="margin-right: 10px; margin-left: 10px;" href="https://www.linkedin.com/in/somesh-bang"><i class="fa-brands fa-linkedin fa-3x growicon"></i></a>
                <a style="margin-right: 10px; margin-left: 10px;" href="https://www.instagram.com/somesh0608"><i class="fa-brands fa-instagram fa-3x growicon"></i></a>
                <a style="margin-right: 10px; margin-left: 10px;" href="https://www.facebook.com/somesh.bang.5"><i class="fa-brands fa-facebook fa-3x growicon"></i></a>
                <a style="margin-right: 10px; margin-left: 10px;" href="https://wa.me/917972558842"><i class="fa-brands fa-whatsapp fa-3x growicon"></i></a>
                <a style="margin-right: 10px; margin-left: 10px;" href="mailto:bangsomesh060801@gmail.com"><i class="fa-solid fa-envelope fa-3x growicon"></i></a>
            </ul>
        </div>

        <br>
        <hr style="border: 1px solid black; margin-top: 40px;">
        <div class="copyright">
            <p style="margin-bottom: 0rem;">Copyright © 2022 <a href="#">SomeshBang</a>.  All Rights Reserved
                <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" style="height: 25px; margin-left: 5px;">
            </p>
        </div>
        </div>
    </section>
    <!-- Contact Me End -->
    </div>

    <!-- Hiring Button -->
    <div class="hiringbox">
        <div class="hbox" id="hbox_id">
            <label class="txt_resm">Hiring...?
                <a href="assets/Somesh Resume.pdf" class="resm_fix" download>Resume / CV <i class="fa-solid fa-download fa-xs"></i></a>
            </label> 
        </div>
    </div>


    <!-- Back to top Button -->
    <button type="upbtn" id="btn-back-to-top">
        <i class="fa-solid fa-arrow-up fa-xl fa-bounce"></i>
    </button>

    <!-- MY SCRIPT -->
    <script src="assets/js/app.js"></script>
    <!-- Icon Script -->
    <script src="https://kit.fontawesome.com/8e26b4230d.js" crossorigin="anonymous"></script>
    <!-- Bootstrap Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
