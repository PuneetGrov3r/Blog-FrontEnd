function start() {
    var $menumain = document.getElementsByClassName('menumain');
    var $signin = document.getElementsByClassName('signin');
    var $signup = document.getElementsByClassName('signup');
    var country = [
        { title: 'Afghanistan' }, { title: 'Albania' }, { title: 'Algeria' }, { title: 'Andorra' }, { title: 'Angola' }, { title: 'Antigua and Barbuda' }, { title: 'Argentina' }, { title: 'Armenia' }, { title: 'Aruba' }, { title: 'Australia' }, { title: 'Austria' }, { title: 'Azerbaijan' }, { title: 'Bahamas, The' }, { title: 'Bahrain' }, { title: 'Bangladesh' }, { title: 'Barbados' }, { title: 'Belarus' }, { title: 'Belgium' }, { title: 'Belize' }, { title: 'Benin' }, { title: 'Bhutan' }, { title: 'Bolivia' }, { title: 'Bosnia and Herzegovina' }, { title: 'Botswana' }, { title: 'Brazil' }, { title: 'Brunei' }, { title: 'Bulgaria' }, { title: 'Burkina Faso' }, { title: 'Burma' }, { title: 'Burundi' }, { title: 'Cambodia' }, { title: 'Cameroon' }, { title: 'Canada' }, { title: 'Cabo Verde' }, { title: 'Central African Republic' }, { title: 'Chad' }, { title: 'Chile' }, { title: 'China' }, { title: 'Colombia' }, { title: 'Comoros' }, { title: 'Congo, Democratic Republic of the' }, { title: 'Congo, Republic of the' }, { title: 'Costa Rica' }, { title: 'Cote d Ivoire' }, { title: 'Croatia' }, { title: 'Cuba' }, { title: 'Curacao' }, { title: 'Cyprus' }, { title: 'Czechia' }, { title: 'Denmark' }, { title: 'Djibouti' }, { title: 'Dominica' }, { title: 'Dominican Republic' }, { title: 'East Timor' }, { title: 'Ecuador' }, { title: 'Egypt' }, { title: 'El Salvador' }, { title: 'Equatorial Guinea' }, { title: 'Eritrea' }, { title: 'Estonia' }, { title: 'Ethiopia' }, { title: 'Fiji' }, { title: 'Finland' }, { title: 'France' }, { title: 'Gabon' }, { title: 'Gambia, The' }, { title: 'Georgia' }, { title: 'Germany' }, { title: 'Ghana' }, { title: 'Greece' }, { title: 'Grenada' }, { title: 'Guatemala' }, { title: 'Guinea' }, { title: 'Guinea - Bissau' }, { title: 'Guyana' }, { title: 'Haiti' }, { title: 'Holy See' }, { title: 'Honduras' }, { title: 'Hong Kong' }, { title: 'Hungary' }, { title: 'Iceland' }, { title: 'India' }, { title: 'Indonesia' }, { title: 'Iran' }, { title: 'Iraq' }, { title: 'Ireland' }, { title: 'Israel' }, { title: 'Italy' }, { title: 'Jamaica' }, { title: 'Japan' }, { title: 'Jordan' }, { title: 'Kazakhstan' }, { title: 'Kenya' }, { title: 'Kiribati' }, { title: 'Korea, North' }, { title: 'Korea, South' }, { title: 'Kosovo' }, { title: 'Kuwait' }, { title: 'Kyrgyzstan' }, { title: 'Laos' }, { title: 'Latvia' }, { title: 'Lebanon' }, { title: 'Lesotho' }, { title: 'Liberia' }, { title: 'Libya' }, { title: 'Liechtenstein' }, { title: 'Lithuania' }, { title: 'Luxembourg' }, { title: 'Macau' }, { title: 'Macedonia' }, { title: 'Madagascar' }, { title: 'Malawi' }, { title: 'Malaysia' }, { title: 'Maldives' }, { title: 'Mali' }, { title: 'Malta' }, { title: 'Marshall Islands' }, { title: 'Mauritania' }, { title: 'Mauritius' }, { title: 'Mexico' }, { title: 'Micronesia' }, { title: 'Moldova' }, { title: 'Monaco' }, { title: 'Mongolia' }, { title: 'Montenegro' }, { title: 'Morocco' }, { title: 'Mozambique' }, { title: 'Namibia' }, { title: 'Nauru' }, { title: 'Nepal' }, { title: 'Netherlands' }, { title: 'New Zealand' }, { title: 'Nicaragua' }, { title: 'Niger' }, { title: 'Nigeria' }, { title: 'North Korea' }, { title: 'Norway' }, { title: 'Oman' }, { title: 'Pakistan' }, { title: 'Palau' }, { title: 'Palestinian Territories' }, { title: 'Panama' }, { title: 'Papua New Guinea' }, { title: 'Paraguay' }, { title: 'Peru' }, { title: 'Philippines' }, { title: 'Poland' }, { title: 'Portugal' }, { title: 'Qatar' }, { title: 'Romania' }, { title: 'Russia' }, { title: 'Rwanda' }, { title: 'Saint Kitts and Nevis' }, { title: 'Saint Lucia' }, { title: 'Saint Vincent and the Grenadines' }, { title: 'Samoa' }, { title: 'San Marino' }, { title: 'Sao Tome and Principe' }, { title: 'Saudi Arabia' }, { title: 'Senegal' }, { title: 'Serbia' }, { title: 'Seychelles' }, { title: 'Sierra Leone' }, { title: 'Singapore' }, { title: 'Sint Maarten' }, { title: 'Slovakia' }, { title: 'Slovenia' }, { title: 'Solomon Islands' }, { title: 'Somalia' }, { title: 'South Africa' }, { title: 'South Korea' }, { title: 'South Sudan' }, { title: 'Spain' }, { title: 'Sri Lanka' }, { title: 'Sudan' }, { title: 'Suriname' }, { title: 'Swaziland' }, { title: 'Sweden' }, { title: 'Switzerland' }, { title: 'Syria' }, { title: 'Taiwan' }, { title: 'Tajikistan' }, { title: 'Tanzania' }, { title: 'Thailand' }, { title: 'Timor - Leste' }, { title: 'Togo' }, { title: 'Tonga' }, { title: 'Trinidad and Tobago' }, { title: 'Tunisia' }, { title: 'Turkey' }, { title: 'Turkmenistan' }, { title: 'Tuvalu' }, { title: 'Uganda' }, { title: 'Ukraine' }, { title: 'United Arab Emirates' }, { title: 'United Kingdom' }, { title: 'Uruguay' }, { title: 'Uzbekistan' }, { title: 'Vanuatu' }, { title: 'Venezuela' }, { title: 'Vietnam' }, { title: 'Yemen' }, { title: 'Zambia' }, { title: 'Zimbabwe' },
    ];

    function sidemenutoggle() {
        $('.ui.labeled.icon.sidebar')
            .sidebar('toggle');
    }

    function signinshow() {
        $('.ui.signin1.modal')
            .modal('show');
    }

    function countrylist() {
        $('.ui.search')
            .search({
                source: country
            });
    }

    function signupshow() {
        $('.ui.signup1.modal')
            .modal('show');
    }
    for (var i = 0; i < $signup.length; i++) {
        $signup[i].addEventListener("click", signupshow, false);
    }
    for (i = 0; i < $signin.length; i++) {
        $signin[i].addEventListener("click", signinshow, false);
    }
    for (i = 0; i < $menumain.length; i++) {
        $menumain[i].addEventListener("click", sidemenutoggle, false);
    }
    $('.ui.search.country').search({ source: country });
    $('.ui.sticky').sticky();

}
window.onload = start;