const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]

const departments = [
    {
        "name": "Sales",
    },
    {
        "name": "Marketing",
    },
    {
        "name": "Engineering",
    },
    {
        "name": "Human Resources",
    },
    {
        "name": "Legal",
    },
]

const mockedList = [
    {
      FirstName: 'Julie',
      LastName: 'Perarnau',
      BirthDate: '07/08/1989',
      StartDate: '01/09/1992',
      Street: '7 Route de Dammartin',
      City: 'Eugene',
      State: 'OR',
      Zipcode: '0123',
      Department: 'Marketing'
    },
    {
      FirstName: 'Claire',
      LastName: 'Bertrand',
      BirthDate: '07/08/1959',
      StartDate: '01/09/2020',
      Street: 'A Great Road',
      City: 'El Paso',
      State: 'TX',
      Zipcode: '9876',
      Department: 'Sales'
    },
    {
      FirstName: 'Simon',
      LastName: 'Cagneaux',
      BirthDate: '07/08/1909',
      StartDate: '02/09/2023',
      Street: 'Rue de la paix',
      City: 'Orlando',
      State: 'AZ',
      Zipcode: '0578',
      Department: 'Consulting'
    },
    {
      FirstName: 'Katie',
      LastName: 'Johnson',
      BirthDate: '07/08/1969',
      StartDate: '02/11/2022',
      Street: 'Rue du Paradis',
      City: 'Seattle',
      State: 'WA',
      Zipcode: '0000',
      Department: 'Consulting'
    },
    {
      FirstName: 'Jacques',
      LastName: 'Thomas',
      BirthDate: '02/08/1981',
      StartDate: '07/10/1998',
      Street: '10 Grande Rue',
      City: 'Roseburg',
      State: 'CA',
      Zipcode: '07771',
      Department: 'Sales'
    },
    {
      FirstName: 'Paco',
      LastName: 'Weiss',
      BirthDate: '02/11/1999',
      StartDate: '02/01/2019',
      Street: 'Avenue Magenta',
      City: 'Springfield',
      State: 'MN',
      Zipcode: '92045',
      Department: 'Engineering'
    },
    {
      FirstName: 'Kathlyn',
      LastName: 'Willians',
      BirthDate: '04/03/1982',
      StartDate: '05/09/1997',
      Street: '254 Main Lane',
      City: 'Redmon',
      State: 'FL',
      Zipcode: '09324',
      Department: 'Marketing'
    },
    {
      FirstName: 'Shanna',
      LastName: 'Boogards',
      BirthDate: '29/01/1962',
      StartDate: '29/07/2001',
      Street: 'Pretty Court',
      City: 'Ben',
      State: 'ID',
      Zipcode: '12048',
      Department: 'Sales'
    },
    {
      FirstName: 'Kaisy',
      LastName: 'Jon',
      BirthDate: '22/08/1948',
      StartDate: '08/10/1990',
      Street: 'Fillmore Street',
      City: 'Sisters',
      State: 'OR',
      Zipcode: '97402',
      Department: 'Sales'
    },
    {
      FirstName: 'Moose',
      LastName: 'Forest',
      BirthDate: '12/10/1983',
      StartDate: '13/01/2014',
      Street: 'Happy Street',
      City: 'Plendelton',
      State: 'NY',
      Zipcode: '345234',
      Department: 'Consulting'
    },
    {
      FirstName: 'Jessica',
      LastName: 'MiddleBridge',
      BirthDate: '01/11/1978',
      StartDate: '03/09/2000',
      Street: 'Salmon Lane',
      City: 'Burley',
      State: 'KS',
      Zipcode: '2452345',
      Department: 'Sales'
    },
    {
      FirstName: 'Skippy Jon',
      LastName: 'Jones',
      BirthDate: '09/10/1988',
      StartDate: '08/21/2009',
      Street: 'Avenue Somewhere',
      City: 'Skinner',
      State: 'OH',
      Zipcode: '24624523',
      Department: 'Engineering'
    }
]

module.exports = {states, departments, mockedList}