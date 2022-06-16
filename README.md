# ANa Robe

![alt text](assets/img/Screenshot%202022-06-16%20181051.png)

This To Do App was designed as a tool to create an overview of User's tasks helping to stay organised and increase productivity.

Therefore, the User will be able to stay more focused having an outline of what things has to do and the ones which are already already completed. 
Having tasks written in a list frees up space in user's mind and allows many more other benefits to come in place like improved memory and increased motivation.

This application contains 2 parts: 
- Intro Screen 
- Input Area.

Requirements for the project is that the Application  has to be interactive and responsive using HTML5, CSS3 and JavaScript.

A live version of the site can be found here: https://anarobe.github.io/Portfolio-Two/


## UX

The App was designed as a tool to create an overview of User's tasks by easily introducing and visiualising in real time the tasks which must be done.


### User Demographic

This App was designed for users who feel overwhelmed with the amount of work, forget to do exactly the important things
and struggle to keep to deadlines.


## External User's Goals

The User's goals are to ripe the benefits of increased productivity, staying motivated 


### App Owner's Goals

The main objective is to increase the productivity and deliver value to the company.He aims is to build practical application that will be 100% successful.


### Design

The design is a minimalistic one and was influenced by the home page's hero image - A desk with a notebook on top and a ToDo list sticked on the Wall.
The choice for Clip Art was made almost instantly, only by one google search because it enpictures exactly what this App wants to provide. 
By placing the Button right in the center of the screen, it invites the users to start a new session with only one click.


### Colour Scheme

With carefully chosen colors, the apearance of the input area and later the actual list + buttons, fits the main picture's theme.


### Hero Image
The Image have been chosen in accordance to the functionality of the app.

![alt text](assets/img/intro-screen.png)


### Intro Screen

The role of the Intro Screen is to invite the user to start a new list of tasks by clicking the unique central button. This idea was inspired by watching the
 -------Rock paper scissors Tutorial https://www.youtube.com/watch?v=qWPtKtYEsN4&ab_channel=DevEd


### Input Area

The Input Area displays initially a text input where the user will type in the task. Next to this area the user can make use of the + button to add the text on the list or simply by pressing the Enter key. 

![alt text](assets/img/list.png)
![alt text](assets/img/pink-input.png)


### Listing Area

The actual list will apear under the input by calling the addToDo() function.
This function wil check first if there is any text typed in the input. 
If there is none, the text's placeholder will turn pink and display the message: "Don't forget to type in a task!".
Also, through trim() function will check if there is any Space typed in the input alone.
Each task will be displayed under the input area in the order which was added. Every item is accompanied by two options 

![alt text](assets/img/check.png)

1. Check Button - which will diplay the text whit a line-through

2. Delete Button - which has the function to remove the task