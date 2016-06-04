// Variables for bio, work, projects, and education are defined, followed by an encapsulated functions for all 4.

var bio = {
    "name": "Yousef Madani",
    "role": "Front-End Web Developer in the making",
    "contacts": {
        "mobile": "12345678",
        "email": "yousef@",
        "github": "@something",
        "twitter":"()",
        "location":"London, UK"

    },
    "welcomeMsg": "Hi there, weclome to my online resume where this and that where it displays this and that and more of these",
    "skills": ["HTML/CSS", "JavaScript", "SP Guru", "MATLAB", "OptiSystem"],
    "biopic":"images/me.jpg",

};



var education = {   
    "schools": [      {         
        "name": "University of Kent",
        "location": "Canterbury, UK",
        "degree":"BSc",
        "major": "Electronics and Communications Engineering",
        "dates": "2008-2012"      
    }, {         
        "name": "University of Hertfordshire",
        "degree": "MSc",
        "location": "Hatfield, UK",
        "major": "Broadband Telecommunications Engineering",
        "dates": "2015-2016"      
    }   ],
    "onlineCourses": [      {         
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" 
    },{
        "title": "Big Data for Smart Cities",
        "school": "IEEEx, edX",
        "date": 2016,
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
}

var projects = {
    "projects": [{
        "title": "Portfolio",
        "description": "A simple portfolio was made based on a provided PDF mockup of a page. The resulting page is fully responive one thing something anything",
        "dates": 2016,
        "images":["images/port.jpg", "images/fry.jpg"]
    }, {
        "title": "Map Project",
        "description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit.",
        "dates": 2016,
        "images":["images/sv1.jpg", "images/sv2.jpg"]
    },{
        "title": "Visible Light Communications",
        "description": "The master's project involved the simulation of an indoor envoriment to inspect the illuminance and power distribution. It invloved using MATLAB. ",
        "dates": 2016,
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
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedemail);
    $("#topContacts").append(formattedgithub);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedemail);
    $("#footerContacts").append(formattedgithub);
    $("#footerContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);


    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
        $("#skills").append(formattedSkill);

        formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
        $("#skills").append(formattedSkill);

        formattedSkill=HTMLskills.replace("%data%",bio.skills[4]);
        $("#skills").append(formattedSkill);

    }

}




work.display = function () {

    $("#workExperience").addClass("animated bounceInRight");

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedET = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedET);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates)
        var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedWorkDesc);
    }

}



projects.display = function () {
        $("#projects").addClass("animated bounceInLeft");

    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var fProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(fProjectTitle);

        var fProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(fProjectDescription);

        var fProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(fProjectDate);


        if (projects.projects[project].images.length > 0) {

            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace ("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}




education.display = function(){
    for (educationInfo in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[educationInfo].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[educationInfo].degree);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[educationInfo].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[educationInfo].major);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[educationInfo].dates);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDate);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    }



        $("#education").append(HTMLonlineClasses);
    for (onlineCourseInfo in education.onlineCourses) {

        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourseInfo].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourseInfo].school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourseInfo].date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourseInfo].url);

        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDate);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}


bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);