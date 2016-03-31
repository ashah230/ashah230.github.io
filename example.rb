=begin
puts "1000".to_i #makes it back into an integer but integers have to be whole. you cant do puts "3.14"

puts "3.94".to_f.floor #rounds it down making it an integer first hten doing floor
puts "3.94".to_f.ceil

puts "Hello World"
puts "another line"

myName = "Ayushi"
puts "Hello my name is " + myName

mysum = 1000 + 50
puts mysum

puts "Hi there— what is your name?"
name = gets
puts "Your name is " + name

puts "Hi there— what is your name?"
name = gets.chomp #.chomp is supposed to add a space
puts "Your name is " + name.reverse #.reverse reverses your characters in your name
puts name.length
puts "It has " + name.length.to_s + " characters in it." #to.s converts the number into a string.


name = "Ayushi"
if name == "Ayushi"
    puts "you made it..."
end

this is how javascript would do it: 

 if (name== "Ayushi") {
    console.log ( "You made it...");
}

 
puts "Hello what is your name? "
name = gets.chomp
if name == "Ayushi"
    puts "You made it!"
else
    puts "Sorry bye!"
    
end


command = ""
while command != "bye"

puts command
command = gets.chomp
end

puts "Come again soon."

=end

students = ["Daniel", "Jim", "Alexa", "Frank"]
puts students
puts students [1]
puts students.length
puts students [10]

students.each do |student|
    puts  "hello " + student
end

10.times do 
puts "hello ayushi"
end
