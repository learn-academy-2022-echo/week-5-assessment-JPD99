# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']








# PsuedoCode
# We are creating a method in ruby called inclusive
# The method inclusive will take in an array of strings and a string, which repserents the desired character 
# Modifications must be made:
    # We are creating some sort of filter that only takes in elements of the array if the have the same character
        # The filter method is called .select in Ruby; the notation includes do-end blocks
            # .select method evaluates boolean values to accept elements its final array 
    # If the element in the array is has the same character in the arguement
# The output of the method will be an array of specific strings

def inclusive array, string
    array.select do |current_string_in_array| 
        current_string_in_array.include?(string)
    end
end

# 3.0.0 :045 > inclusive(beverages_array,'o')
#  => ["coffee", "soda water"] 

# 3.0.0 :046 > inclusive(beverages_array,'t')
#  => ["tea", "water", "soda water"]









# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 



# We are creating a method called out_of_nest 
# The method out_of_nest will take in 1 hash; and so only 1 parameter
# Expected Outcome is an array of all key values in alphabetical order as strings
# Heavy Modifciations:
    # We must remove nested arrays, which uses the method .flatten which is an acessor (temporary modifier)
        # since the hash is in {} and the arrays are in [] to get the elements in data type string we need to flatten twice
            # e,g. greetings = {hi: ['hello', 'hola', 'ni hao']} 
                # greetings.flatten =  [hi:, ['hello', 'hola', 'ni hao']]
                # greetings.flatten.flatten = [hi:, 'hello', 'hola', 'ni hao']
        # We can use the .class to systematically remove all Symbol classes from our data 
        # Finally to sort the elements in alphabetical order we use .sort


# Attempt 1. Removes all symbols, but method output is incomplete, 
# Outputs:  ["Washington", "Idaho", "California", "Nevada", "Maine", "Vermont"] ; why arent the other 3 elements appearing?

# def out_of_nest hash
#     squashed = hash.flatten.flatten
#     squashed.select do |every_element_in_flat_array|
#         every_element_in_flat_array.class == Symbol
#                 squashed.delete(every_element_in_flat_array)
#     end
#     return squashed
# end
        


# Attempt 2. This method removes the first symbol with ease, but the other symbols are not being removed... .select is eneumerable, so why is the method not capable of removing all symbols in the array?
# Outputs: [ 'Washington', 'Oregon', 'Idaho', southwest:, 'California', 'Arizona', 'Nevada', notheast: 'Maine', 'New Hampshire', 'Vermont']

# def out_of_nest hash
#     squashed = hash.flatten.flatten
#     squashed.select do |every_element_in_flat_array|
#     if every_element_in_flat_array.class == Symbol
#         squashed.delete(every_element_in_flat_array)
#     else
#     return squashed
#                      end
# end
# end


# Attempt 3. Now the method works completely; but its bulky :| ; And is werid because we are essentially looping over a loop ?????
# Outputs: 3.0.0 :271 > out_of_nest(us_states)
#  => ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Vermont", "Washington"]

def out_of_nest hash
    squashed = hash.flatten.flatten
    repeater = 0
while repeater = hash.flatten.flatten.length
    squashed.select do |every_element_in_flat_array|
    repeater = repeater + 1
    if every_element_in_flat_array.class == Symbol
        squashed.delete(every_element_in_flat_array)
    else
    end
    repeater = repeater + 1
                     end
    return squashed.sort
end
end

# Refactoring Attempt 1. Maybe I used the wrong enumerable method? Let try the .each do enumerable; okay.... it doesn't work, the output is exactly like Attempt 2
# def out_of_each hash
#     squashed = hash.flatten.flatten
#     squashed.each do |every_element_in_flat_array|
#         if every_element_in_flat_array.class == Symbol
#             squashed.delete(every_element_in_flat_array)
#         else
#         end
#     return squashed
# end



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'




# Create the class Bike
# When we intialize the class Bike we want to make a parameter called name
# We wont be adding any more parameters since that would make it more diffcult, and since we have default calues for wheels and curent_speed we dont need those anyways 
    # The methods we write will change those other values
# We need to create a name for model, wheels, and current speed to the class; we'll add them as instance varibles with @
# Set default values accordingly
# We need to have a method called bike_info that will detail all of our properties of the object as a string
    # using stirng interpolation as shown: "blah blah #{reference_instance_varible} blah"
# Every Class has an end and Every def has an end

class Bike
def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
end 

def  bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}"
end
end

# Creation of the Object from Class Bike
# 3.0.0 :226 > tree = Bike.new('Trek')
#  => #<Bike:0x00007fad8da7b0d8 @current_speed=0, @model="Trek", @wheels=2>
# Implementing the method bike_info
# 3.0.0 :251 > tree.bike_info
#  => "The Trek bike has 2 wheels and is going 0" 






# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


# We will need to add 2 new methods that will alter the current_speed instance varible
# Simply create a def-end block in within the Class' def-end block
    # For pedal_faster we will increase the speed based on the number given 
        # We will reference the curent_speed as @current_speed 
        # The parameter is a number that will increase the @curent_speed
    # For brake we will lower the speed based on the number given
        # We will reference the speed as @current_speed
        # The parameter is a number that will decrease the the value of @current_speed
# When we call on the method with dot notation plus the required parameter (number) we will be able to change the default speed of the instance of the Class Bike

class Bike
    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end 
    
        def  bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}"
        end

            def pedal_faster number
                @current_speed = @current_speed + number 
            end

                def brake number
                    @current_speed = @current_speed - number 
                end
    end


    # => #<Bike:0x00007ff6210e2cb0 @current_speed=0, @model="Trek", @wheels=2> 
    # 3.0.0 :022 > tree.pedal_faster(100)
    #  => 100 
    # 3.0.0 :023 > tree.brake(25)
    #  => 75 
    # 3.0.0 :024 > tree.bike_info
    #  => "The Trek bike has 2 wheels and is going 75" 
    # 3.0.0 :025 > 
    