<script>
  function displayFirstLetters() {
    // Get the input value
    let inputValue, outputElement, ringContainer;
    if (typeof document !== "undefined") {
      inputValue = document.getElementById('daisyInput').value.trim();
      outputElement = document.getElementById('output');
      ringContainer = document.querySelector('.ring-container');
    }

    // If the input is empty, set the output to an empty string and hide the ring
    if (inputValue === '') {
      outputElement.innerText = '';
      ringContainer.classList.add('hidden-ring');
      return;
    }

    // Split the input value into words
    const words = inputValue.split(' ');

    // Extract the first letter of each word and convert to uppercase
    const firstLetters = words.map(word => word.charAt(0).toUpperCase()).join('');

    // Display the result in the output element and show the ring
    outputElement.innerText = firstLetters;
    ringContainer.classList.remove('hidden-ring');
  }

  // Listen for the "Enter" key press in the input field
  if (typeof document !== "undefined") {
    document.getElementById('daisyInput').addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        displayFirstLetters();
      }
    });
  }



          
const names = [
  "Zephyr Thorn", "Moxie Blaze", "Dante Raven", "Nimue Winter", "Zenith Stone", "Hendrix Blue", "Echo Lark", "Ransom Justice", 
  "Dahlia Nightshade", "Axl Fury", "Jupiter Steele", "Saffron Gold", "Wilder Grey", "Aurora Rayne", "Arrow Swift", "Phoenix Storm", 
  "Orion Moon", "Lilith Crimson", "Draco Blaze", "Indigo Sky", "Axel Night", "Nova Eclipse", "Dusk Hunter", "Nebula Star", "Rune Wolf", 
  "Crimson Fury", "Zion Stone", "Briar Thorn", "Onyx Black", "Rogue Shadow", "Zara Phoenix", "Halo Angel", "Xanthe Fire", "Huxley Fox", 
  "Gypsy Moon", "Serenade Ocean", "Aurelius Knight", "Ophelia Midnight", "Sable Storm", "Caspian Ocean", "Ryder Blaze", "Soraya Raven", 
  "Onyx Knight", "Zephyrus Storm", "Vespera Moon", "Luminara Star", "Atlas Sky", "Salem Shadow", "Rhiannon Raven", "Quinn Phoenix", 
  "Amethyst Rose", "Lennox Blue", "Xanthus Blaze", "Raven Black", "Zora Night", "Balthazar Raven", "Journey Wilder", "Zora Nightingale", 
  "Coral Reef", "Lunara Moon", "Kael Thorn", "Zephyrine Sky", "Nyx Moon", "Azura Ocean", "Jagger Stone", "Lumina Dawn", "Lysander Knight", 
  "Kaida Snow", "Echo Raven", "Aspen Winter", "Sapphire Ocean", "Stryker Steele", "Ember Blaze", "Stormy Knight", "Ripley Raven", "Crescent Moon", 
  "Zelda Nightingale", "Aria Sky", "Cruz Star", "Kaida Snowflake", "Talon Steele", "Cato Raven", "Sable Shadow", "Dante Phoenix", "Fenris Wolf", 
  "Nebula Sky", "Zarek Thorn", "Raven Eclipse", "Lyra Star", "Phoenix Noir", "Atlas Raven", "Cerise Blaze", "Thorne Black", "Vesper Knight", 
  "Onyx Moon", "Indigo Knight", "Rogue Phoenix", "Orion Blaze", "Haven Storm", "Jett Steele", "Amaris Moon", "Jupiter Blaze", "Blaise Noir", 
  "Luminous Sky", "Zephyrine Knight", "Orpheus Raven", "Zenith Blaze", "Lilith Moon", "Crimson Knight", "Salem Raven", "Sable Night", 
  "Ryder Storm", "Aurora Knight", "Siren Ocean", "Caspian Blaze", "Sable Blaze", "Xanthe Knight", "Vesper Phoenix", "Dante Knight", "Zara Star", 
  "Elysium Sky", "Zephyrus Knight", "Nova Knight", "Axel Blaze", "Rune Raven", "Onyx Knight", "Zion Blaze", "Rhiannon Knight", "Nimue Moon", 
  "Zora Storm", "Balthazar Night", "Lennox Noir", "Raven Knight", "Huxley Blaze", "Lumina Star", "Coral Knight", "Axl Blaze", "Zelda Noir", 
  "Journey Raven", "Zara Noir", "Lunara Knight", "Kael Raven", "Vespera Sky", "Sapphire Knight", "Ripley Knight", "Lysander Blaze", "Kaida Knight", 
  "Aspen Blaze", "Echo Knight", "Crescent Knight", "Zephyrine Noir", "Stryker Knight", "Zora Blaze", "Soraya Knight", "Sable Noir", "Ember Knight", 
  "Stormy Raven", "Aria Knight", "Cruz Moon", "Talon Blaze", "Cato Knight", "Sable Knight", "Dante Noir", "Fenris Moon", "Nebula Knight", 
  "Zarek Blaze", "Raven Knight", "Lyra Blaze", "Phoenix Knight", "Atlas Noir", "Zephyr Midnight", "Raven Thorn", "Nimue Blaze", "Zenith Night", 
  "Hendrix Sky", "Echo Blaze", "Dahlia Raven", "Axl Storm", "Jupiter Knight", "Wilder Noir", "Arrow Blaze", "Phoenix Knightingale", "Orion Knight", 
  "Draco Blaze", "Indigo Night", "Axel Blaze", "Nova Knight", "Dusk Thorn", "Rune Raven", "Zion Blaze", "Briar Knight", "Onyx Moon", "Rogue Raven", 
  "Zara Night", "Halo Blaze", "Xanthe Knight", "Huxley Moon", "Gypsy Raven", "Serenade Blaze", "Aurelius Knight", "Ophelia Raven", "Sable Knight", 
  "Caspian Blaze", "Ryder Knight", "Soraya Blaze", "Onyx Raven", "Zephyrus Knight", "Vespera Noir", "Luminara Knight", "Atlas Blaze", 
  "Salem Knight", "Rhiannon Blaze", "Quinn Knight", "Amethyst Noir", "Lennox Knight", "Xanthus Blaze", "Raven Knightingale", "Zora Blaze", 
  "Balthazar Knight", "Journey Raven", "Zora Knightingale", "Coral Blaze", "Lunara Knight", "Kael Raven", "Zephyrine Noir", "Nyx Raven", 
  "Azura Knight", "Jagger Blaze", "Lumina Knight", "Lysander Raven", "Kaida Knightingale", "Echo Thorn", "Aspen Blaze", "Sapphire Knight", 
  "Stryker Raven", "Ember Knightingale", "Stormy Blaze", "Ripley Raven", "Crescent Knightingale", "Zelda Blaze", "Aria Raven", "Cruz Knight", 
  "Kaida Noir", "Talon Raven", "Cato Knightingale", "Sable Noir", "Dante Knight", "Fenris Raven", "Nebula Knightingale", "Zarek Blaze", 
  "Raven Noir", "Lyra Knight", "Phoenix Blaze", "Atlas Knight", "Zephyr Knightingale", "Adam Garcia", "Amy Park", "Andrew Kim", "Anna Chen", 
  "Ashley Wright", "Benjamin Reyes", "Bethany Johnson", "Brandon Lee", "Brian Hernandez", "Carla Davis", "Carlos Perez", "Catherine Phillips", "Chad Taylor", 
  "Christine Baker", "Christopher Scott", "Claire Martinez", "Connor Martin", "Courtney Hall", "Craig Nelson", "Crystal Ramirez", "Daniel Green", "David Diaz", 
  "Derek Cooper", "Diana Ortiz", "Dylan Morris", "Elizabeth Wood", "Emily Adams", "Erica Ross", "Erik Johnson", "Erin Foster", "Ethan Brown", "Gabriel Jones", 
  "Grace Lee", "Gregory Lewis", "Haley Brooks", "Hannah Parker", "Isaac Rivera", "Isabel Hernandez", "Jacob Collins", "Jake Patel", "James Campbell", "Jamie Kim", 
"Jasmine Reed", "Jason Clark", "Jennifer Perry", "Jessica Bailey", "Joel Turner", "John Nelson", "Jonathan Baker", "Jordan Jackson", "Joseph Kim", "Joshua Lee", "Julia Wilson", "Justin Wright", "Karen Chen", "Katherine Davis", "Kathryn Phillips", "Katie Cooper", "Kayla Garcia", "Kevin Ortiz", "Kimberly Brown", "Kristen Nguyen", "Kyle Martin", "Lauren Martinez", "Leah Taylor", "Liam Wright", "Lillian Evans", "Linda Perez", "Lisa Hernandez", "Logan Mitchell", "Lucas Davis", "Madison Smith", "Megan Carter", "Melanie Flores", "Michael Reed", "Michelle Baker", "Nathan Lee", "Nicholas Wright", "Nicole Hernandez", "Olivia Kim", "Patrick Johnson", "Paula Davis", "Rachel Thompson", "Rebecca Wilson", "Richard Chen", "Ryan Davis", "Samantha Clark", "Sarah Parker", "Sean Brown", "Shannon Lee", "Stephanie Kim", "Steven Ramirez", "Sylvia Gonzalez", "Taylor Green", "Thomas Lee", "Tiffany Hernandez", "Tyler Martinez", "Vanessa Adams", "Victoria Taylor", "William Brown", "Aaron James", "Abigail Baker", "Adrian Flores", "Aiden Lee", "Alex Brown", "Alexa Cooper", "Alexander Davis", "Alicia Perez", "Amanda Kim", "Amelia Wright", "Amy Chen", "Andrea Rodriguez", "Angel Mitchell", "Angela Campbell", "Anthony Nguyen", "Arianna Taylor", "Arthur Evans", "Ashlyn Rodriguez", "Austin Wright", "Avery Hernandez", "Bailey Martinez", "Barbara Gonzalez", "Beatriz Perez", "Benjamin Wood", "Bianca Ramirez", "Blake Parker", "Bradley Turner", "Brandon Jones", "Brenda Lee", "Brett Wilson", "Brittany Clark", "Brooke Martin", "Bryan Hernandez", "Caleb Davis", "Cameron Green", "Candace Nelson", "Caroline Johnson", "Carter Adams", "Cassandra Martinez", "Catherine Kim", "Cesar Ortiz", "Chandler Smith", "Charles Chen", "Charlotte Wright", "Chloe Anderson", "Christian Perez", "Christina Wilson", "Christopher Baker", "Cindy Hernandez", "Claudia Thompson", "Cody Cooper", "Colin Martinez", "Colleen Lee", "Connor Brown", "Corey Nguyen", "Courtney Wilson", "Crystal Johnson", "Cynthia Davis", "Daisy Lee", "Dakota Mitchell", "Damon Wright", "Danielle Smith", "Danny Kim", "Daphne Evans", "Darius Davis", "Darren Lee", "David Brown", "Dawn Parker", "Dean Wilson", "Deborah Wright", "Delaney Taylor", "Derek Lee", "Destiny Hernandez", "Diana Wilson", "Diego Rodriguez", "Dominic Nguyen", "Donna Clark", "Dylan Anderson", "Edgar Ramirez", "Edward Baker", "Eleanor Wright", "Eli Davis", "Ella Cooper", "Ellen Taylor", "Elliott Lee", "Emily Hernandez", "Emma Martinez", "Eric Brown", "Erika Kim", "Ernesto Rodriguez", "Esther Davis", "Ethan Evans", "Evelyn Chen", "Faith Wright", "Felicity Adams", "Fernando Perez", "Francesca Johnson", "Gabriela Hernandez", "Gage Mitchell", "Gavin Davis", "Georgia Martinez", "Gerald Wright", "Gianna Lee", "Giselle Rodriguez", "Gloria Perez", "Grace Baker", "Gregory Kim", "Gwendolyn Nguyen", "Hailey Anderson", "Haley Hernandez", "Hannah Johnson", "Harper Martin", "Harrison Davis", "Hayden Wilson", "Heather Taylor", "Henry Lee", "Holly Evans", "Hope Brown", "Hunter Baker", "Ian Martinez", "Iris Rodriguez", "Isaiah Wright", "Isabella Davis", "Isabelle Kim", "Jack Anderson", "Jackson Cooper", "Jaclyn Martinez", "Jacob Brown", "Jada Hernandez", "Jade Lee", "Jaden Wilson", "Jaime Ramirez", "Jake Thompson", "James Clark", "Jamie Smith", "Janelle Davis", "Jared Martin", "Jasmine Nguyen", "Javier Hernandez", "Jayden Adams", "Jayla Lee", "Jeanette Baker", "Jeffrey Perez", "Jenna Kim", "Jennifer Wilson", "Jeremy Evans", "Jessica Green", "Jesus Ramirez", "Jillian Lee", "Joanna Davis", "Jocelyn Martinez", "Joey Johnson", "John Brown", "Jonathan Wright", "Jordan Hernandez", "Jordyn Taylor", "Jorge Gonzalez", "Joseph Davis", "Joshua Martinez", "Josiah Lee", "Josie Rodriguez", "Joyce Kim", "Juan Perez", "Jude Anderson", "Judith Wright", "Fiddlesticks Wobblebottom Blubbering Buffoonery McFuzzball","Snuggle Muffin Pookie Pants Tickle Tushie Boopity Boo","Juliana Hernandez", "Justin Davis", "Kaitlyn Kim", "Kaleb Wilson", "Karen Lee", "Karina Martinez", "Katelyn Brown", "Katherine Wright", "Katie Johnson", "Kaylee Perez", "Keith Davis", "Kelly Anderson", "Kelsey Baker", "Kenneth Smith", "Kevin Lee", "Kimberly Chen", "Kira Rodriguez", "Kylie Evans", "Landon Martin", "Laura Perez", "Lauren Johnson", "Layla Hernandez", "Leah Davis", "Leilani Kim", "Leonardo Ramirez", "Leslie Wright", "Levi Anderson", "Lila Martinez", "Lillian Lee", "Lily Brown", "Lindsey Wilson", "Logan Davis", "Lorenzo Gonzalez", "Lucas Hernandez", "Lucy Kim", "Luke Smith", "Lydia Johnson", "Mackenzie Davis", "Madeline Perez", "Madison Lee", "Maggie Martinez", "Manuel Rodriguez", "Marcos Hernandez", "Margaret Wilson", "Maria Brown", "Marina Kim", "Mario Davis", "Marisol Martinez", "Mark Lee", "Martha Hernandez", "Martin Perez", "Mary Anderson", "Mason Wright", "Matthew Chen", "Maurice Baker", "Max Wilson", "Maxwell Davis", "Maya Kim", "Megan Johnson", "Melanie Hernandez", "Melissa Martinez", "Mia Lee", "Micah Smith", "Michaela Brown", "Michelle Wright", "Miguel Rodriguez", "Miles Davis", "Miranda Perez", "Mitchell Kim", "Molly Johnson", "Monica Hernandez", "Morgan Anderson", "Nadia Martinez", "Natalia Lee", "Natalie Brown", "Nathan Smith", "Nathaniel Davis", "Nayeli Hernandez", "Nicholas Wilson", "Nicole Perez", "Noah Baker", "Nolan Kim", "Nora Martinez", "Flippy McFartface", "Oliver Anderson", "Olivia Brown", "Oscar Davis", "Paige Martinez", "Parker Kim", "Patricia Hernandez", "Patrick Smith", "Paul Wilson", "Payton Lee", "Pedro Rodriguez", "Peyton Baker", "Philip Chen", "Phoebe Wright", "Piper Davis", "Preston Gonzalez", "Rachel Lee", "Rafael Martinez", "Ramon Hernandez", "Raquel Kim", "Raymond Anderson", "Reagan Perez", "Rebecca Brown", "Reese Wilson", "Renee Davis", "Ricardo Rodriguez", "Richard Lee", "Riley Smith", "Roberto Hernandez", "Rochelle Baker", "Rodney Kim", "Roger Davis", "Ronald Martinez", "Rosa Brown", "Rose Wilson", "Ruby Perez", "Russell Anderson", "Ryan Johnson", "Sabrina Hernandez", "Samantha Lee", "Samuel Smith", "Sandra Davis", "Santiago Rodriguez", "Sara Kim", "Sarah Wilson", "Savannah Perez", "Scott Anderson", "Sean Martin", "Selena Baker", "Sergio Hernandez", "Seth Kim", "Shane Davis", "Shannon Wilson", "Shawn Smith", "Shayla Rodriguez", "Shelby Brown", "Sienna Martinez", "Sierra Lee", "Simon Perez", "Skylar Anderson", "Sofia Hernandez", "Sophia Kim", "Spencer Davis", "Stacy Baker", "Stanley Wilson", "Stella Rodriguez", "Stephanie Lee", "Stephen Smith", "Steven Anderson", "Summer Perez", "Suzanne Brown", "Sydney Kim", "Talia Davis", "Tanner Martinez", "Tara Wilson", "Tatiana Rodriguez", "Teresa Hernandez", "Terrence Smith", "Tessa Baker", "Theodore Anderson", "Theresa Lee", "Thomas Perez", "Tiffany Brown", "Timothy Kim", "Titus Davis", "Tomas Hernandez", "Tommy Smith", "Tony Martinez", "Travis Anderson","Trinity Brown", "Tucker Davis", "Tyler Wilson", "Valentina Perez", "Valerie Kim", "Vanessa Hernandez", "Veronica Smith", "Vicki Anderson", "Victor Martinez", "Victoria Lee", "Vincent Baker", "Violet Rodriguez", "Virginia Jones", "Walter Wright", "Wayne Kim", "Wendy Davis", "Wesley Perez", "Weston Smith", "Whitney Baker", "Will Hernandez", "William Wilson", "Willow Anderson", "Wyatt Martinez", "Xander Lee", "Xavier Rodriguez", "Yahir Ramirez", "Yamilet Gomez", "Yara Alvarez", "Yasmin Ortiz", "Yessenia Vargas", "Yesenia Fernandez", "Yolanda Cruz", "Yvette Reyes", "Yvonne Diaz", "Zachary Johnson", "Zara Medina", "Zechariah Thomas", "Zion Davis", "Zoe Parker", "Abby White", "Abraham Garcia", "Adalyn Nguyen", "Addison Taylor", "Adelaide Hernandez", "Aden Lee", "Adrian Sanchez", "Adriana Baker", "Ahmad Patel", "Aiden Perez", "Aimee Wright", "Alaina Lee", "Alan Foster", "Alana Ortiz", "Alanna Martinez", "Alberto Ramirez", "Alec Carter", "Alejandra Wright", "Alejandro Mitchell", "Alexa Scott", "Alexandra Cruz", "Alexis Torres", "Ali Green", "Alice Sanders", "Alicia Richardson", "Alina Cooper", "Alison Campbell", "Alissa Cox", "Alivia Reed", "Allen Gonzalez", "Allie Hamilton", "Alma Jones", "Alondra Flores", "Alonso Martinez", "Alvin Carter", "Alyson Kelly", "Alyssa Fisher", "Amara Wilson", "Amelia Garcia", "Amir Brown", "Amya Martin", "Ana Perry", "Anastasia Ross", "Anders Olsen", "Anderson Cruz", "Andres Lee", "Andrea White", "Andrew Patel", "Angelica Robinson", "Angelina Nguyen", "Angelo Rodriguez", "Anika Scott", "Aniyah Davis", "Annabelle Mitchell", "Annalise Johnson", "Anne Kim", "Annie Baker", "Anthony Powell", "Anton Williams", "Antonio Brown", "April Foster", "Arabella Lee", "Archer Wright", "Aria Jones", "Ariana Smith", "Arianna Cooper", "Ariel Kelly", "Armando Perez", "Armani Hernandez", "Arthur Hayes", "Arturo Garcia", "Asher Evans", "Ashley Carlson", "Ashlyn Ortiz", "Ashton Ramirez", "Aspen Martinez", "Astrid Davis", "Athena Johnson", "Atticus Smith", "Audrey Reynolds", "Aurora Cooper", "Austin Perez", "Autumn Wright", "Ava Nguyen", "Avery Davis", "Axel Turner", "Ayden Hernandez", "Ayla Martinez", "Bailee Wilson", "Barrett Kim", "Baylee Baker", "Beatrice Carter", "Beau Johnson", "Bella Green", "Ben Foster", "Benjamin Woodard", "Bennett Scott", "Bianca Rodriguez", "Blake Cooper", "Blakely Wilson", "Bobby Nguyen", "Bonnie Smith", "Bradley Carlson", "Brady Campbell", "Branden Parker", "Brandi Lee", "Brandon Ramirez", "Branson Wright", "Braxton Davis", "Brayden Hernandez", "Breanna Foster", "Brendan Jones", "Brennan Martinez", "Brenton Gonzalez", "Brett Powell", "Bria Wilson", "Briana Flores", "Brianna Kim", "Bridgette White", "Brinley Carter", "Brock Johnson", "Broderick Brown", "Brody Perez", "Brooke Cooper", "Brooklyn Davis", "Brooks Rodriguez", "Bryanna Mitchell", "Bryce Wright", "Brynn Thompson", "Bryson Martinez", "Caden Lee", "Caitlin Kim", "Caleb Patel", "Callie Scott", "Calvin Hayes", "Cameron Parker", "Candice Chen", "Carina Ortiz", "Carla Green", "Carlee Sullivan", "Carley Torres", "Carlos Brown", "Carly Foster", "Carmen Kim", "Caroline Baker", "Carolyn Cruz", "Carson Powell", "Carter Williams", "Casey Robinson", "Cassandra Hayes", "Cassidy Phillips", "Cassie Carlson", "Catalina Davis", "Catherine Wright", "Cecelia Perez", "Cedric Johnson", "Celeste Ramirez", "Celia Reed", "Chad Cooper", "Chance Rodriguez", "Chandler Scott", "Chanelle Williams", "Channing Nguyen", "Charity Martin", "Charlee Lee", "Charles Reynolds", "Charlie Foster", "Charlotte Turner", "Chase Evans", "Chelsea Patel", "Cherish Garcia", "Cheyenne Torres", "Chloe Davis", "Christian Martinez", "Christine Wilson", "Christopher Ramirez", "Ciara Johnson", "Cindy Kim", "Clara Carter", "Clarissa Brown", "Claudia Lopez", "Clayton Hayes", "Clementine Turner", "Clifford Nguyen", "Clinton Wright", "Coby Martin", "Cody Phillips", "Colby Carlson", "Cole Williams", "Colette Perez", "Colin Robinson", "Colleen Scott", "Collin Foster", "Colt Sullivan", "Conner Torres", "Connor Reed", "Conrad Lee", "Cooper Martin", "Corey Johnson", "Corinne Davis", "Cornelius Wright", "Cory Cooper", "Courtney Hayes", "Craig Parker", "Cristian Ramirez", "Cristina Torres", "Crystal Kim", "Cullen Evans", "Curtis Nguyen", "Cynthia Campbell", "Cyrus Turner", "Daisy Sullivan", "Dakota Torres", "Dale Phillips", "Dallas Brown", "Damon Hayes", "Dan Carlson", "Dana Reed", "Dane Martin", "Dangelo Robinson", "Daniela Perez", "Danielle Wright", "Danny Johnson", "Dante Davis", "Daphne Turner", "Darcy Williams", "Darian Foster", "Darius Lee", "Darnell Hayes", "Darrell Nguyen", "Darren Robinson", "Darryl Torres", "Daryl Reed", "Dave Carlson", "David Parker", "Davion Phillips", "Dawson Brown", "Dayana Ramirez", "Dayton Martin", "Deacon Evans", "Dean Nguyen", "Deanna Robinson", "Deborah Reed", "Declan Hayes", "Delaney Martin", "Delilah Torres", "Della Phillips", "Delilah Cooper", "Demetrius Johnson", "Denise Campbell", "Dennis Carlson", "Derek Parker", "Desmond Brown", "Destinee Turner", "Destiny Williams", "Devan Patel", "Devin Garcia", "Devon Kim", "Dexter Wright", "Diamond Ortiz", "Diana Perez", "Diego Torres", "Dillon Robinson", "Dina Nguyen", "Dixie Martin", "Dominic Hayes", "Dominique Lee", "Donna Brown", "Donovan Evans", "Dora Ramirez", "Dorian Davis", "Dorothy Foster", "Doug Phillips", "Drake Sullivan", "Drew Torres", "Dulce Carlson", "Duncan Reed", "Dustin Parker", "Dwayne Cooper", "Dwight Johnson", "Dylan Campbell", "Easton Hayes", "Ebony Turner", "Eden Williams", "Edgar Martin", "Edith Torres", "Edmund Phillips", "Eduardo Lee", "Edward Nguyen", "Edwin Robinson", "Eileen Perez", "Eli Brown", "Elias Turner", "Elijah Hayes", "Elisa Carlson", "Eliseo Evans", "Elisha Campbell", "Eliza Foster", "Elizabeth Kim", "Ella Phillips", "Ellie Parker", "Elliot Sullivan", "Elliott Torres", "Ellis Johnson", "Elmer Garcia", "Eloise Cooper", "Elsa Davis", "Elton Hayes", "Elvis Nguyen", "Emerson Robinson", "Emery Phillips", "Emilee Reed", "Emiliano Martin", "Emilio Campbell", "Emily Brown", "Emma Evans", "Emmalyn Turner", "Emmanuel Lee", "Emmett Torres", "Enrique Ramirez", "Erica Foster", "Ericka Robinson", "Erik Parker", "Ernest Hayes", "Ernesto Cooper", "Estelle Nguyen", "Estevan Garcia", "Esther Campbell", "Ethan Phillips", "Eugene Martin", "Eunice Davis", "Eva Hayes", "Evan Nguyen", "Evangeline Robinson", "Evelin Torres", "Evelyn Johnson", "Everett Foster", "Ezekiel Brown", "Ezra Parker", "Fabian Hayes", "Faith Sullivan", "Fallon Torres", "Farrah Phillips", "Fatima Cooper", "Faye Martin", "Felix Nguyen", "Fernando Robinson", "Fiona Parker", "Fisher Hayes", "Fletcher Campbell", "Flora Brown", "Florence Turner", "Flynn Evans", "Frances Kim", "Francesca Perez", "Francine Johnson", "Francis Cooper", "Francisco Ramirez", "Franco Garcia", "Franklin Lee", "Frederick Nguyen", "Freya Robinson", "Frida Phillips", "Gabriel Campbell", "Gabriela Torres", "Gabriella Reed", "Gabrielle Davis", "Gage Hayes", "Galen Robinson", "Garett Parker", "Garrett Foster", "Gary Brown", "Gavin Cooper", "Gemma Martin", "Genevieve Kim", "Geoffrey Carlson", "George Campbell", "Georgia Turner", "Gerald Nguyen", "Gerardo Robinson", "Gia Phillips", "Giada Evans", "Gideon Torres", "Gigi Williams", "Gilberto Hayes", "Gillian Nguyen", "Gina Robinson", "Giovanni Parker", "Giselle Foster", "Gladys Brown", "Glenda Carlson", "Glenn Cooper", "Gloria Martin", "Godfrey Kim", "Goldie Davis", "Grace Hayes", "Gracie Campbell", "Graham Torres", "Grant Phillips", "Grayson Reed", "Gregory Johnson", "Greta Nguyen", "Gretchen Robinson", "Greyson Carlson", "Griffin Foster", "Guadalupe Brown", "Gunnar Cooper", "Gus Martin", "Gwen Kim", "Gwendolyn Parker", "Haley Hayes", "Halle Evans", "Hallie Torres", "Hamilton Reed", "Hana Phillips", "Hank Robinson", "Hanna Campbell", "Hannah Nguyen", "Harlan Cooper", "Harley Williams", "Harmony Martin", "Harold Carlson", "Harper Davis", "Harriet Hayes", "Harrison Campbell", "Harry Torres", "Harvey Phillips", "Haven Robinson", "Hayden Parker", "Hayes Foster", "Heath Brown", "Heather Kim", "Hector Nguyen", "Heidi Carlson", "Helen Cooper", "Helena Martin", "Henley Hayes", "Henry Campbell", "Herbert Torres", "Holly Phillips", "Hope Robinson", "Houston Davis", "Howard Hayes", "Hudson Parker", "Hugh Foster", "Hunter Brown", "Ian Kim", "Ibrahim Nguyen", "Ida Carlson", "Iliana Cooper", "Imani Robinson", "India Martin", "Indigo Torres", "Ines Phillips", "Ingrid Hayes", "Ireland Campbell", "Irene Nguyen", "Irma Robinson", "Isaac Parker", "Isabel Foster", "Isabella Brown", "Isabelle Kim", "Isaiah Hayes", "Isis Cooper", "Isla Martin", "Ismael Torres", "Israel Phillips", "Ivy Carlson", "Jace Robinson", "Jack Campbell", "Jackie Nguyen", "Jackson Parker", "Jaclyn Foster", "Jacob Brown", "Jacqueline Kim", "Jada Robinson", "Jade Hayes", "Jaden Torres", "Jaiden Phillips", "Jaime Carlson", "Jair Garcia", "Jakob Robinson", "Jalen Cooper", "Jamar Martin", "Jamari Torres", "Jamel Phillips", "James Campbell", "Jami Nguyen", "Jamie Parker", "Janelle Foster", "Janessa Brown", "Janet Kim", "Janiyah Robinson", "Jared Hayes", "Jasmin Cooper", "Jasmine Martin", "Jason Torres", "Javier Phillips", "Jaxon Carlson", "Jay Campbell", "Jaycee Nguyen", "Jayda Parker", "Jayde Brown", "Jayden Kim", "Jayla Robinson", "Jaylee Hayes", "Jaylene Torres", "Jaylin Phillips", "Jaylon Cooper", "Jaylynn Martin", "Jayson Nguyen", "Jazlyn Robinson", "Jazmin Hayes", "Jazmine Phillips", "Jean Cooper", "Jeanette Martin", "Jeffrey Torres", "Jemma Phillips", "Jenifer Campbell", "Jenna Brown", "Jennifer Kim", "Jenny Robinson", "Jeremiah Hayes", "Jeremy Carlson", "Jermaine Cooper", "Jerome Martin", "Jerry Torres", "Jessamine Phillips", "Jesse Campbell", "Jessica Nguyen", "Jessie Parker", "Jesus Foster", "Jett Brown", "Jewel Kim", "Jillian Robinson", "Jim Hayes", "Jocelyn Cooper", "Joe Phillips", "Joel Torres", "Joey Carlson", "Johan Robinson", "John Campbell", "Johnathan Nguyen", "Johnny Parker", "Jolie Brown", "Jonah Kim", "Jonas Hayes", "Jonathan Carlson", "Jordyn Cooper", "Jorge Martin", "Jose Torres", "Joseph Phillips", "Josh Campbell", "Joshua Brown", "Josiah Kim", "Josie Robinson", "Jovani Hayes", "Jovan Torres", "Joy Cooper", "Joyce Martin", "Juan Phillips", "Judah Carlson", "Jude Campbell", "Judith Nguyen", "Juelz Parker", "Jules Foster", "Julia Brown", "Julian Kim", "Juliana Robinson", "Julianna Hayes", "Julie Cooper", "Julien Torres", "Juliet Phillips", "Julio Martin", "July Carlson", "June Campbell", "Junior Nguyen", "Justice Parker", "Justin Brown", "Justina Kim", "Kade Robinson", "Kaden Hayes", "Kaelyn Cooper", "Kai Torres", "Kaiden Phillips", "Kailey Carlson", "Kaitlyn Robinson", "Kalani Hayes", "Kale Cooper", "Kaleb Martin", "Kali Torres", "Kamari Phillips", "Kameron Carlson", "Kamila Brown", "Kane Campbell", "Kara Nguyen", "Karen Parker", "Karina Foster", "Karissa Kim", "Karl Robinson", "Karla Hayes", "Karlee Cooper", "Karly Torres", "Karson Phillips", "Kasey Carlson", "Kash Martin", "Kassandra Brown", "Katarina Campbell", "Kate Nguyen", "Katelyn Parker", "Katelynn Robinson", "Katharine Hayes", "Katherine Cooper", "Kathleen Torres", "Kathryn Phillips", "Katie Carlson", "Katrina Brown", "Katy Kim", "Kay Campbell", "Kaya Nguyen", "Kaydence Parker", "Kayden Robinson", "Kayla Hayes", "Kaylee Cooper", "Kayleigh Torres", "Kayley Phillips", "Kaylie Carlson", "Kaylin Martin", "Kaylynn Brown", "Keagan Campbell", "Keaton Nguyen", "Keegan Robinson", "Keely Hayes", "Keira Cooper", "Keith Torres", "Kellen Phillips", "Kelley Carlson", "Kelli Brown", "Kellie Kim", "Kelly Campbell", "Kelsey Nguyen", "Kelsi Parker", "Kelsie Robinson", "Kelvin Hayes", "Kendall Cooper", "Kendra Torres", "Kendrick Phillips", "Kenia Carlson", "Kenley Brown", "Kennedy Campbell", "Kenneth Nguyen", "Kenny Parker", "Kent Robinson", "Kenya Hayes", "Keri Cooper", "Kerri Torres", "Kerry Phillips", "Kesha Carlson", "Kevin Brown", "Keyla Kim", "Khalil Campbell", "Kian Nguyen", "Kiera Parker", "Kierra Robinson", "Kieran Hayes", "Killian Cooper", "Kim Torres", "Kimberlee Phillips", "Kimberly Carlson", "Kingsley Brown", "Kingston Campbell", "Kinley Nguyen", "Kinsley Robinson", "Kira Hayes", "Kirsten Cooper", "Kirstin Torres", "Knox Phillips", "Kobe Carlson", "Koda Brown", "Kody Kim", "Kolby Campbell", "Kole Nguyen", "Kora Parker", "Korbin Robinson", "Kourtney Hayes", "Krishna Cooper", "Krista Torres", "Kristen Phillips", "Kristian Carlson", "Kristin Brown", "Kristina Campbell", "Kristopher Nguyen", "Kristy Robinson", "Krystal Hayes", "Kurt Cooper", "Kyla Torres", "Kyle Phillips", "Kylee Carlson", "Kyleigh Brown", "Kyler Campbell", "Kylie Nguyen", "Kyra Parker", "Kyrie Robinson", "Kyson Hayes", "Lacey Cooper", "Laila Torres", "Lainey Phillips", "Lake Carlson", "Lamar Brown", "Lana Kim", "Landon Campbell", "Lane Nguyen", "Laney Parker", "Langston Robinson", "Lara Hayes", "Larry Cooper", "Laura Torres", "Laurel Phillips", "Lauren Carlson", "Lauryn Brown", "Lavinia Campbell", "Lawrence Nguyen", "Layla Robinson", "Layton Hayes", "Lea Cooper", "Leah Torres", "Leandro Phillips", "Lee Carlson", "Leia Brown", "Leif Campbell", "Leigh Nguyen", "An error occurred. Please try again later."
];
          
function generateName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function handleClick() {
  name = generateName();
}

let name 
$:name = '';
</script>


<center>
    <div class="pt-2">
      <ul class="steps">
      <li class="step step-primary poppins">Register</li>
      <li class="step step-primary poppins" data-content="?">Profile</li>
      <li class="step poppins" data-content="?">Done!</li>
    </ul>
    </div>
</center>
    <!-- svelte-ignore a11y-missing-attribute -->
   <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            .hidden-ring {
              border-color: transparent;
            }
          </style>
        </head>
        </html>
        <!-- <body class="flex flex-col items-center justify-start h-auto pt-10"> -->
          <center class="pt-4 pb-6">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="text-6xl poppins">Profile</a>
          </center>

          <div class="flex flex-col items-center">
            <div class="flex items-center mb-4">
              <input type="text" id="daisyInput" placeholder="Name Form" class="poppins text-center rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <button on:click={displayFirstLetters} class="daisy-outline bg-black rounded-full btn-sm ml-2 px-4 text-white poppins">Submit</button>
            </div>
            <div class="ring-container flex items-center justify-center w-20 h-20 border-2 border-black rounded-full">
              <div class="text-xl poppins font-bold" id="output"></div>
            </div>
          <center class="mx-auto pt-2">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="poppins text-base">Profile Picture</a>
          </center>
          </div>

                    <!-- Random Name Generator -->

<center class="pt-16">
  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="poppins text-3xl">Need Ideas? Ask our Name Generator!</a>
</center>

 <center class="pt-12">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="btn btn-outline btn poppins rounded-full" on:click={handleClick}>Generate Name</a>
 </center>

          {#if name}
          <center class="pt-6">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="poppins text-base">Name:</a>
           </center>
           <center class="pt-2">
            <p class="poppins badge badge-outline text-2xl p-5">{name}</p>
           </center>
           <center class="pt-4 pr-4 pl-4">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="poppins text-lg">
              If you are content with the suggested name, you can easily transfer it to the Name Form by copying and pasting it into the form. If you don't like it, click "Generate Name" again for a new one. Instructions for copying and pasting are provided.</a>
           </center>

           <!-- copy -->
           <div class="p-12 px-96">
            <div class="border-2 rounded-2xl border-black">
 <center class="pt-6">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="text-2xl poppins">Copy:</a>
 </center>
 <center class="mx-auto pt-6">
            <kbd class="kbd poppins">ctrl</kbd>
               +
               <kbd class="kbd poppins">c</kbd> <a class="poppins">on Windows and Linux</a>
 </center>
 
 <center class="mx-auto pt-6 pb-6">
   <kbd class="kbd poppins">⌘</kbd>
      +
      <kbd class="kbd poppins">c</kbd> <a class="poppins">on Mac</a>
 </center>
           </div>
 </div>

 <!-- paste -->
 <div class="pb-6 px-96">
  <div class="border-2 rounded-2xl border-black">
<center class="pt-6">
  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="text-2xl poppins">Paste:</a>
</center>
<center class="mx-auto pt-6">
  <kbd class="kbd poppins">ctrl</kbd>
     +
     <kbd class="kbd poppins">v</kbd> <a class="poppins">on Windows and Linux</a>
</center>

<center class="mx-auto pt-6 pb-6">
<kbd class="kbd poppins">⌘</kbd>
+
<kbd class="kbd poppins">v</kbd> <a class="poppins">on Mac</a>
</center>
 </div>
</div>
          {/if}        
                
          <center class="mx-auto pt-36">
          <a class="btn btn-outline poppins rounded-full" href="/setup/done">Next</a>
          </center>