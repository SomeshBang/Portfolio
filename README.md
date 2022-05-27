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


<body class="bodyDesign">

    <!-- Navbar -->
    <header>
        <section>
            <div class="backgroundImage">
                <nav class="navbar navbar-expand-lg navbg">
                    <div class="container-fluid">
                        <label class="navbar-brand navTitle">Portfolio</label>
                        <button class="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto pad">
                                <li class="nav-item marginLeft">
                                    <a class="nav-link active" aria-current="page" href="#aboutme">About me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#skills">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#project">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contactme">Contact me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="assets/Somesh Resume.pdf" download><i
                                            class="fa-solid fa-download"></i> Resume</a>
                                </li>
                                <li class="nav-item">
                                    <input type="checkbox" id="darklight" class="themebtn" onclick="themeChange ()">
                                    <label for=darklight class="dlthemebtn"></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <h1 class="formateTxt">Somesh Bang <br><span class="preTypewrite">I'am</span><span href=""
                            class="typeWrite " data-period="2000"
                            data-type='[ " Developer.... ", " Freelancer....", " Web Designer....", " Trader...." ]'>
                            <span class="wrap"></span>
                        </span></h1>
                </div>
            </div>
        </section>
    </header>
    <!-- --------------------Navbar ends------------- -->


    <!-- About Me -->
    <section id="aboutme">
        <div class="container-fluid">
            <h1 class="lne">About Me</h1>
            <img class="myimg" src="assets/img/myimg.jpg">
            <p class="myDesc">
                <span style="font-size: 38px; font-family: 'Pacifico', cursive;">H</span>
                <span style="font-family: 'Rubik', sans-serif;">ello, I'm currently an undergraduate student and
                    fresher. I'm a Full Stack Developer with a special passion for Python Developing, and I also have an
                    interest in Web technologies, ML, AI, Hacking and Cybersecurity. I'm currently learning more about
                    Python, and I strongly believe in doing than saying...</span>
                <span>
                    <ul class="listStyling">
                        <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss"
                                style="--fa-animation-duration: 1.0s; "></i> Name : Somesh Bang</li>
                        <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss"
                                style="--fa-animation-duration: 1.0s; "></i> Email : bangsomesh060801@gmail.com</li>
                        <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss"
                                style="--fa-animation-duration: 1.0s; "></i> Phone No : +91 7972558842</li>
                        <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss"
                                style="--fa-animation-duration: 1.0s; "></i> Degree : BCA (Bachelor of Computer
                            Applications.)</li>
                        <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss"
                                style="--fa-animation-duration: 1.0s; "></i> College : Zulal Bhilajirao Patil College
                            affiliated to the <u>KBC North Maharashtra University</u></li>
                        <li><i class="fa-solid fa-angles-right fa-beat fa-sm facss"
                                style="--fa-animation-duration: 1.0s; "></i> City : Dhule,Maharashtra.</li>
                    </ul>
                </span>
            </p>
        </div>
        <div class="container" style="margin-top:3vw;">
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
                                <span class="clgStyle" style="font-size: 1.0rem;">Zulal Bhilajirao Patil College,
                                    affiliated to KBC North Maharashtra University, Dhule.</span><br>
                                <span class="clgDate" style="font-size: 0.8rem; font-style: italic;">07/2019 -
                                    06/2022</span><br>
                                <span class="clgGrade" style="font-size: 0.8rem; font-style: italic;"> Grade = 9.00
                                    CGPA</span>
                            </p>
                        </div>
                        <div class="flip-card-back">
                            <p class="card-text educdescBack">
                                <span class="edu">HSC Board - Science</span> <span class="edu" style="float: right;">SSC
                                    Board - Science</span><br>
                                <span class="clgName">SSVPS's Dr. P. R. Ghogrey Science College,Dhule.</span>
                                <span class="clgName cn2" style="float: right;">Chavara English Medium High
                                    School,Dhule.</span><br>
                                <span class="fontAdjBack lineAdj">07/2017 - 05/2019</span>
                                <span class="fontAdjBack lineAdj" style="float: right;">07/2007 - 05/2017</span><br>
                                <span class="fontAdjBack"> Grade = 52.31%</span>
                                <span class="fontAdjBack" style="float: right;"> Grade = 67.20%</span><br>
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ---------------About Me End---------------------- -->

    <!-- Skills  -->
    <section id="skills" style="margin-top:5vw;">
        <h1 class="lne"> Skills </h1>

        <div class="container">
            <div class="row" style="margin:auto;">
                <div class="col-sm-4 mt-2 crdHeight">
                    <div class="card cdeffect">
                        <div class="card-body cardbg">
                            <h5 class="card-title cdtitle"><i class="fa-brands fa-python fa-xl"></i> Python 3</h5>
                            <p class="card-text cddesc">
                                Django | Tkinter | PyTorch | Django | MongoDB | Pandas | BeautifulSoup | Numpy | OpenCV
                                | Matplotlib | Sqlite3 |
                                Math | Web2py | Regular Expression(regex) | TensorFlow | Jupyter Notebook | Google
                                colabs | PIP
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 mt-2 crdHeight">
                    <div class="card cdeffect">
                        <div class="card-body cardbg">
                            <h5 class="card-title cdtitle">
                                <img src="https://img.icons8.com/ios-filled/40/000000/c-plus-plus-logo.png" />
                                C Family
                                <img src="https://img.icons8.com/ios-filled/40/000000/c-sharp-logo.png" />
                            </h5>
                            <p class="card-text cddesc">
                                C | C++ | C# | OpenGL | .NET Framework | Selenium | .NET Core
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 mt-2 crdHeight">
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
                <div class="col-sm-4 mt-5 crdHeight">
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
                <div class="col-sm-4 mt-5 crdHeight">
                    <div class="card cdeffect">
                        <div class="card-body cardbg">
                            <h5 class="card-title cdtitle">
                                <i class="fa-brands fa-java fa-xl"></i>
                                Java
                            </h5>
                            <p class="card-text cddesc">
                                Java Standard libraries | Maven | Google-json | XML | HTTP Libraries | Spring |
                                Hibernate
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 mt-5 crdHeight">
                    <div class="card cdeffect">
                        <div class="card-body cardbg">
                            <h5 class="card-title cdtitle">
                                <i class="fa-solid fa-database fa-lg"></i>
                                Other Skills
                                <img src="https://img.icons8.com/material-outlined/45/000000/mysql-logo.png" />
                            </h5>
                            <p class="card-text cddesc">
                                MySql | Sql | SQlite | Kali Linux | Parrot OS | Windows 7,8,9,10 | VS Code | Atom |
                                Eclipse | Android Studio | Ms Office |
                                Command Shell(cmd) | Bash | Powershell | GitHub
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -----------------skills ends------------ -->

    <!-- Project -->
    <section id="project">
        <h1 class="lne"> My Work </h1>

    </section>
    <!-- ---------------Project ends-------------------- -->

    <!-- Certification -->
    <section id="">
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
                <a href="https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code"
                    class="cef_btn2">Check Certificate <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
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
                <a href=" " class="cef_btn2">Check Certificate <i
                        class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
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
                <a href="https://www.guvi.in/verify-certificate?id=2m8SI10R3J1b42826Z" class="cef_btn2">Check
                    Certificate <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
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
                <a href="https://learning.tcsionhub.in/LX/ecertificate/verification" class="cef_btn2">Check Certificate
                    <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
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
                <a href="coursera.org/verify/specialization/RYZEFETRCKKB" class="cef_btn2">Check Certificate <i
                        class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
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
                <a href="coursera.org/verify/J5FSYGWUPPVM" class="cef_btn2">Check Certificate <i
                        class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
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
                <a href="coursera.org/verify/R75RPBGNBCEU" class="cef_btn2">View Certificate <i
                        class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></a>
            </div>
        </div>

    </section>
    <!-- -------------------Certification ends------------------ -->

    <!-- Contact Me -->
    <section id="contactme">

        <div class="container-fluid bgcontact" style="border-bottom: solid;">
            <h2 class="contactcls">Connect...!</h2>
            <!-- margintop -->

            <div class="alignicon" id="icon">
                <ul class="product" style="padding-left: 0rem;">
                    <a style="margin-right: 10px; margin-left: 10px;" href="https://github.com/SomeshBang"><i
                            class="fa-brands fa-github fa-3x growicon"></i></a>
                    <a style="margin-right: 10px; margin-left: 10px;" href="https://www.linkedin.com/in/somesh-bang"><i
                            class="fa-brands fa-linkedin fa-3x growicon"></i></a>
                    <a style="margin-right: 10px; margin-left: 10px;" href="https://www.instagram.com/somesh0608"><i
                            class="fa-brands fa-instagram fa-3x growicon"></i></a>
                    <a style="margin-right: 10px; margin-left: 10px;" href="https://www.facebook.com/somesh.bang.5"><i
                            class="fa-brands fa-facebook fa-3x growicon"></i></a>
                    <a style="margin-right: 10px; margin-left: 10px;" href="https://wa.me/917972558842"><i
                            class="fa-brands fa-whatsapp fa-3x growicon"></i></a>
                    <a style="margin-right: 10px; margin-left: 10px;" href="mailto:bangsomesh060801@gmail.com"><i
                            class="fa-solid fa-envelope fa-3x growicon"></i></a>
                </ul>
            </div>

            <br>
            <hr style="border: 1px solid black; margin-top: 40px;">
            <div class="copyright">
                <p style="margin-bottom: 0rem; text-align: center; ">Copyright © 2022 <a href="https://someshbang.github.io/Portfolio/" style="color: #efff00;">SomeshBang</a>. All Rights Reserved
                    <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                        style="height: 25px;">
                </p>
            </div>
        </div>
        </div>
    </section>
    <!-- ---------------Contact ends--------------- -->

    <!-- Hiring Button -->
    <div class="hiringbox">
        <div class="hbox" id="hbox_id">
            <label class="txt_resm">Hiring...?
                <a href="assets/Somesh Resume.pdf" class="resm_fix" download>Resume / CV <i
                        class="fa-solid fa-download fa-xs"></i></a>
            </label>
        </div>
    </div>

        <!-- Back to top Button -->
        <button type="upbtn" id="btn-back-to-top">
            <i class="fa-solid fa-arrow-up fa-xl fa-bounce"></i>
        </button>













    <section id=""></section>











    <!-- MY SCRIPT -->
    <script src="assets/js/app.js"></script>

    <!-- Icon Script -->
    <script src="https://kit.fontawesome.com/8e26b4230d.js" crossorigin="anonymous"></script>

    <!-- Bootstrap Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>

</html>
