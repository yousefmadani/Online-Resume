// Variables for bio, work, projects, and education are defined, followed by an encapsulated functions for all 4.

var bio = {
    "name": "Yousef Madani",
    "role": "Front-End Web Developer in the making",
    "contacts": {
        "mobile": "12345678",
        "email": "yousef@",
        "github": "yousefmadani",
        "twitter":"()",
        "location":"London, UK"
    },
    "welcomeMessage": "Hi there, weclome to my online resume where this and that where it displays this and that and more of these",
    "skills": ["HTML/CSS", "JavaScript", "SP Guru", "MATLAB", "OptiSystem"],
    "biopic":"images/me.jpg",
};


var education = {
    "schools": [{
        "name": "University of Kent",
        "location": "Canterbury, UK",
        "degree":"BEng (Hons)",
        "majors": ["Electronic", "and Communications Engineering"],
        "dates": "2008-2012",
        "url": "https://www.eda.kent.ac.uk/undergraduate/ug_ecommseng_fy_beng.aspx"
    }, {         
        "name": "University of Hertfordshire",
        "degree": "MSc",
        "location": "Hatfield, UK",
        "majors": ["Broadband", "Telecommunication Networks"],
        "dates": "2015-2016",
        "url": "http://www.herts.ac.uk/courses/radio-and-mobile-communication-systems" 
    }   ],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" 
    },{
        "title": "Big Data for Smart Cities",
        "school": "IEEEx, edX",
        "date": "2016",
        "url": "https://www.edx.org/course/big-data-smart-cities-ieeex-introdatax"
    }]
};

var work = {
    "jobs":[
    {
        "employer":"Peter Pan",
        "title":"tribe memeber",
        "location": "Neverland",
        "dates":"2008-2016",
        "description":"Lookout"
    },
    {
        "employer":"Aslan",
        "title":"Lion Carer",
        "location": "Narnia",
        "dates":"2016-2017",
        "description": "Lion Chores"
    }
    ]
};

var projects = {
    "projects": [{
        "title": "Build a Portfolio",
        "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
        "dates": "2016",
        "images":["images/port.jpg", "images/fry.jpg"]
    }, {
        "title": "Map Project",
        "description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit.",
        "dates": "2016",
        "images":["images/sv1.jpg", "images/sv2.jpg"]
    },{
        "title": "Visible Light Communications",
        "description": "The master's project involved the simulation of an indoor envoriment to inspect the illuminance and power distribution. It invloved using MATLAB. ",
        "dates": "2016",
        "images":["images/vlc1.png", "images/vlc2.png"]
    }]
};




////////// Ecapsulated Functions: BIO-WORK-PROJECTS-EDUCATION //////////


bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").addClass("animated bounceInLeft");
    //https://daneden.github.io/animate.css/

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedemail, formattedgithub, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skillList)
    {
        var formattedSkill = HTMLskills.replace("%data%", skillList);
        $("#skills").append(formattedSkill);
    });
};


work.display = function () {

    $("#workExperience").addClass("animated bounceInRight");
    $("#workExperience").append(HTMLworkStart);

    work.jobs.forEach(function(jobList)
    {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", jobList.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", jobList.title);
        var formattedET = formattedEmployer + formattedTitle;
        var formattedWorkLocation = HTMLworkLocation.replace("%data%",jobList.location);
        var formattedDates = HTMLworkDates.replace("%data%",jobList.dates);
        var formattedWorkDesc = HTMLworkDescription.replace("%data%", jobList.description);
        $(".work-entry:last").append(formattedET, formattedWorkLocation, formattedDates, formattedWorkDesc);
    });
};


projects.display = function () {
    $("#projects").addClass("animated bounceInLeft");

    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);

        var fProjectTitle = HTMLprojectTitle.replace("%data%",project.title);
        var fProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var fProjectDate = HTMLprojectDates.replace("%data%", project.dates);

        $(".project-entry:last").append(fProjectTitle, fProjectDescription, fProjectDate);

        project.images.forEach(function(projectImages){
            var formattedImage = HTMLprojectImage.replace ("%data%", projectImages);
            $(".project-entry:last").append(formattedImage);
        });
    });
};


education.display = function(){
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(educationInfo){
        var formattedName = HTMLschoolName.replace("%data%",educationInfo.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", educationInfo.degree);
        var formattedLocation = HTMLschoolLocation.replace("%data%", educationInfo.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", educationInfo.majors);
        var formattedDate = HTMLschoolDates.replace("%data%", educationInfo.dates);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree, formattedDate, formattedLocation, formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourseInfo){
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourseInfo.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourseInfo.school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", onlineCourseInfo.date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourseInfo.url);
        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

        $(".education-entry:last").append(formattedTitleSchool, formattedOnlineDate, formattedOnlineURL);
    });
};


bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);