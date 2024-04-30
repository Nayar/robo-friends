const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];


var robotcontainer = document.getElementsByClassName("robot-container")[0]
console.log(robotcontainer)
function display_robots(filter=""){
    robotcontainer.innerHTML = "" // Clearing the robot container everytime we are genarating new divs
    let new_robot_list = robots;
    if(filter!=="") {
        new_robot_list = robots.filter(robot => robot.name.toLowerCase().includes(filter.toLowerCase()));
        console.log(new_robot_list)
    }

    for(let robot of new_robot_list) {
        let newdiv = document.createElement('div')
        newdiv.className = "robot"

        let profilediv = document.createElement('div')
        profilediv.className = 'imageholder'

        let profileimg = document.createElement('img')
        profileimg.src = robot.image
        profileimg.width= "200"
        profileimg.height="200"

        profilediv.appendChild(profileimg)

        let newname = document.createElement('h2')
        newname.innerHTML= robot.name
        let newemail = document.createElement('h3')
        newemail.innerHTML = robot.email
        newdiv.appendChild(profilediv)
        newdiv.appendChild(newname)
        newdiv.appendChild(newemail)
        robotcontainer.appendChild(newdiv)
    }
}

display_robots()

let inputrobotname = document.getElementById("inputrobotname")
inputrobotname.oninput = function() {
    let searchvalue = inputrobotname.value
    display_robots(searchvalue)
}