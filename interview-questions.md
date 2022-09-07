# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer: Ruby Hashes are similar to arrays, but instead of being enclosed in square brackets [] they are enclosed in curly brackets {}. Hashes in Ruby are known to hold data in form of key value pairs.

Researched answer: 
Ruby Hashes are another collection data structure; it is composed of a varible name, assignment operator, and key value pairs (enclosed in curly brackets). Unlike an array, Hashes are accessible to only key values not indexes.

e.g. 
juices = {:apple_juice => 4 ,
          :cranberry_juice => 2}
juices[:apple_juice] = 4 
OR
juices = {apple_juice: 4 ,
          cranberry_juice: 2}
juices[:apple_juice] = 4 

The former and latter have different notations for their key value pairs, but note that they way to call back a specific key value pair is identical. 

Additional intresting point is that Hashes can store other referential data types: arrays, objects, and even more hashes. The thing is, is that a hash within a array within a hash may be very diffcult to read. 


2. What is a gem?

Your answer: Gems are library components of Rails, very similiar to React's library. They both offer seemless paths for integrating other people's components into a new project. 

Researched answer:
A gem is an indivdual package from a Ruby library. It's almost like installing an app, as a gem has a name, and version number associated to it. Gems are essentially the same thing as a gem, but its plural. Gems are a collection of libraries or applications put into one package that can be installed with one command line: use gem install [gem_name]. I personally have not installed a gem package before, but I'm sure I have used it before as a testing suite for Ruby code.

3. What is Ruby on Rails?

Your answer: Ruby on Rails is a web application framework; this system is created specifically for ruby, however it works with other essential coding langauges like javascript, html, and css. Ruby on Rails can be used to create full-stack-apps where both front-end and back-end are incorporated on the project. Ruby and Rails stores information differently, where Ruby store info temporarily and Rails store info persistently. 


Researched answer:
Ruby on Rails is a framework application written for Ruby, plus some other integral langauges (javascript, css, and html); if a full stack application is made from Ruby on Rails, that same application can have both front-end and back-end technologies. The entire structure of Ruby on Rails uses the MVC Architecture: Model, View, and Controller to operate the user interface aspect; model is how the data is shaped, and can be used to relate other data; view is what the user sees, controller is the brain of the application, manages interaction between user and database. Ruby on Rails has a ton of functionality that is created automatically! The only drawback of this framework is that it is very, very picky with syntax, improper spelling + incorrect naming conventions will cause a lot of issues; this trade off is refered to as convention from configuration.


4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database are a collection of tables that are linked together by a primary key from the intial database, spread on to the others as a foregin key. I'm not sure if there are other databases from standard standalone database and a relational database. 

Researched answer:
Relational Databases are databases that have some sort of connection to each other. These explicit connections are identified by an ID: the intial database will produce a primary key that will relate to other databases. However, primary keys are all unique from each other--how do we assign identical primary keys to an already automated process that produces a primary key to other databases? We use the foregin key which is an alias for the primary key; other databases that share a relation to the intial database will take in a foregin key that has the identical primary key ID.

These would the steps in implementing a relational connection between databases; assuming all models were created, edited with the proper belongs_to: and has_many:, migrated, and we're in the ruby console...

(some steps will be omitted)
Terminal: 
    $ rails g model Team team_name:string  city:string
    $ rails g model Player person_name:string  team_id:integer
        <!-- Manually edit Team with has_many:players and edit Player with belongs_to:team -->
    $ rails db:migrate
    $ irb
Ruby Console:
    Team.create team_name:'Cowboys' , city:'Dallas'
    cowboys = Team.find 1
    cowboys.players.create person_name:'Bobby Joe' 
        <!-- Might notice why we didn't fill in the user_id parameter... this way automatically asigns the primary key of the value in Team into the team_id (aka the foregin key)  -->

Also I did manage to find other forms of databases. There seems to be an entire encyclopedia worth of database types! To name a few there is: Operational Database, Distributed Database, Cloud Database, End User Database, Centralized Database, ... and so on and so forth. 


5. What are primary keys? Why are they important?

Your answer: Primary keys are unique to one another, and a form of identification with the entire database. No two primary keys will ever be the same in a project. They are important because they specifically identify things with unique names, allows for easy searchability, and provides relational connections

Researched answer:
When Databases are created, an id column is automatically generated that holds the primary key ID; usually this value is an integer. Consequently, when a database receives a manually generated record from the devloper or the user, a primary key is assigned. Do note that primary keys are only unique to other primary keys in the same project. The term primary key has a a lot of significance with database work: (1) gives each record in a database a unique identifer, (2) provides relational connections, (3) allows for easy searchbility of one specific record, and (4) offers data integrity. 

Using the last example: 

(some steps will be omitted)
Terminal: 
    $ rails g model Team team_name:string  city:string
    $ rails g model Player person_name:string  team_id:integer
        <!-- Manually edit Team with has_many:players and edit Player with belongs_to:team -->
    $ rails db:migrate
    $ irb
Ruby Console:
    Team.create team_name:'Cowboys' , city:'Dallas'
    cowboys = Team.find 1
    cowboys.players.create person_name:'Bobby Joe' 
        <!-- Might notice why we didn't fill in the user_id parameter... this way automatically asigns the primary key of the value in Team into the team_id (aka the foregin key)  -->

We successfully created a foregin key from a primary key, but you may ask yourself wheres the actual data description, if we type in these command in the Ruby Console:
Ruby Console: 
    Team.all 
        Output: 
        [#<Team:0x00000000t9qgy0qp0
        id: 1. ,
        team_name:'Cowboys',
        city: 'Dallas',
        created_at: Sun, 5 Sept 2022 23:12:42.703053000 UTC +00:00,
        updated_at: Sun, 5 Sept 2022 23:12:42.703053000 UTC +00:00]

    Player.all
        Output: 
        [#<Team:0x000003450t9gey0qp0
        id: 2. ,
        person_name: 'Bobby Joe'
        team_id: 1,
        created_at: Mon, 6 Sept 2022 23:12:42.703053000 UTC +00:00,
        updated_at: Mon, 6 Sept 2022 23:12:42.703053000 UTC +00:00]

We see the automated id column is created automatically and registers a new number for every record created. 
We also see that in the Player database the foregin key, team_id, is linked to primary key 1, theeby establishing a relational connection across databases



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routing, is some sort of redirection technique that uses HTTP verbs to allow the controller to complete CRUD actions 

2. JSON: JSON is Javascript Object Notation, formats data in a specific manner, and useful in storing and delivering data

3. ERB: ERB is short for embedded ruby, it allows the integration of ruby to html or any or other coding language

4. Params: Params is a object that stores all parameters that needs to be passed during a time when the user wishes to make a browser (url) change; We can take a specific parameter out with this notation params[:name]

5. API: API stands for Application Programming Interface, it is an idea that brings multiple applications together to preform functions together; usually these functions relate to sharing data. 




