import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import styles from './citieslistinput.css';
const cities=[{name:'Port Blair',id:0},{name:'Adoni',id:1},{name:'Amaravati',id:2},{name:'Anantapur',id:3},{name:'Chandragiri',id:4},{name:'Chittoor',id:5},{name:'Dowlaiswaram',id:6},{name:'Eluru',id:7},{name:'Guntur',id:8},{name:'Kadapa',id:9},{name:'Kakinada',id:10},{name:'Kurnool',id:11},{name:'Machilipatnam',id:12},{name:'Nagarjunakoṇḍa',id:13},{name:'Rajahmundry',id:14},{name:'Srikakulam',id:15},{name:'Tirupati',id:16},{name:'Vijayawada',id:17},{name:'Visakhapatnam',id:18},{name:'Vizianagaram',id:19},{name:'Yemmiganur',id:20},{name:'Itanagar',id:21},{name:'Dhuburi',id:22},{name:'Dibrugarh',id:23},{name:'Dispur',id:24},{name:'Guwahati',id:25},{name:'Jorhat',id:26},{name:'Nagaon',id:27},{name:'Sibsagar',id:28},{name:'Silchar',id:29},{name:'Tezpur',id:30},{name:'Tinsukia',id:31},{name:'Ara',id:32},{name:'Baruni',id:33},{name:'Begusarai',id:34},{name:'Bettiah',id:35},{name:'Bhagalpur',id:36},{name:'Bihar Sharif',id:37},{name:'Bodh Gaya',id:38},{name:'Buxar',id:39},{name:'Chapra',id:40},{name:'Darbhanga',id:41},{name:'Dehri',id:42},{name:'Dinapur Nizamat',id:43},{name:'Gaya',id:44},{name:'Hajipur',id:45},{name:'Jamalpur',id:46},{name:'Katihar',id:47},{name:'Madhubani',id:48},{name:'Motihari',id:49},{name:'Munger',id:50},{name:'Muzaffarpur',id:51},{name:'Patna',id:52},{name:'Purnia',id:53},{name:'Pusa',id:54},{name:'Saharsa',id:55},{name:'Samastipur',id:56},{name:'Sasaram',id:57},{name:'Sitamarhi',id:58},{name:'Siwan',id:59},{name:'Chandigarh',id:60},{name:'Ambikapur',id:61},{name:'Bhilai',id:62},{name:'Bilaspur',id:63},{name:'Dhamtari',id:64},{name:'Durg',id:65},{name:'Jagdalpur',id:66},{name:'Raipur',id:67},{name:'Rajnandgaon',id:68},{name:'Silvassa',id:69},{name:'Daman',id:70},{name:'Diu',id:71},{name:'Delhi',id:72},{name:'New Delhi',id:73},{name:'Madgaon',id:74},{name:'Panaji',id:75},{name:'Ahmadabad',id:76},{name:'Amreli',id:77},{name:'Bharuch',id:78},{name:'Bhavnagar',id:79},{name:'Bhuj',id:80},{name:'Dwarka',id:81},{name:'Gandhinagar',id:82},{name:'Godhra',id:83},{name:'Jamnagar',id:84},{name:'Junagadh',id:85},{name:'Kandla',id:86},{name:'Khambhat',id:87},{name:'Kheda',id:88},{name:'Mahesana',id:89},{name:'Morvi',id:90},{name:'Nadiad',id:91},{name:'Navsari',id:92},{name:'Okha',id:93},{name:'Palanpur',id:94},{name:'Patan',id:95},{name:'Porbandar',id:96},{name:'Rajkot',id:97},{name:'Surat',id:98},{name:'Surendranagar',id:99},{name:'Valsad',id:100},{name:'Veraval',id:101},{name:'Ambala',id:102},{name:'Bhiwani',id:103},{name:'Chandigarh',id:104},{name:'Faridabad',id:105},{name:'Firozpur Jhirka',id:106},{name:'Gurgaon',id:107},{name:'Hansi',id:108},{name:'Hisar',id:109},{name:'Jind',id:110},{name:'Kaithal',id:111},{name:'Karnal',id:112},{name:'Kurukshetra',id:113},{name:'Panipat',id:114},{name:'Pehowa',id:115},{name:'Rewari',id:116},{name:'Rohtak',id:117},{name:'Sirsa',id:118},{name:'Sonipat',id:119},{name:'Bilaspur',id:120},{name:'Chamba',id:121},{name:'Dalhousie',id:122},{name:'Dharmshala',id:123},{name:'Hamirpur',id:124},{name:'Kangra',id:125},{name:'Kullu',id:126},{name:'Mandi',id:127},{name:'Nahan',id:128},{name:'Shimla',id:129},{name:'Una',id:130},{name:'Anantnag',id:131},{name:'Baramula',id:132},{name:'Doda',id:133},{name:'Gulmarg',id:134},{name:'Jammu',id:135},{name:'Kathua',id:136},{name:'Leh',id:137},{name:'Punch',id:138},{name:'Rajauri',id:139},{name:'Srinagar',id:140},{name:'Udhampur',id:141},{name:'Bokaro',id:142},{name:'Chaibasa',id:143},{name:'Deoghar',id:144},{name:'Dhanbad',id:145},{name:'Dumka',id:146},{name:'Giridih',id:147},{name:'Hazaribag',id:148},{name:'Jamshedpur',id:149},{name:'Jharia',id:150},{name:'Rajmahal',id:151},{name:'Ranchi',id:152},{name:'Saraikela',id:153},{name:'Badami',id:154},{name:'Ballari',id:155},{name:'Bangalore',id:156},{name:'Belgavi',id:157},{name:'Bhadravati',id:158},{name:'Bidar',id:159},{name:'Chikkamagaluru',id:160},{name:'Chitradurga',id:161},{name:'Davangere',id:162},{name:'Halebid',id:163},{name:'Hassan',id:164},{name:'Hubballi-Dharwad',id:165},{name:'Kalaburagi',id:166},{name:'Kolar',id:167},{name:'Madikeri',id:168},{name:'Mandya',id:169},{name:'Mangaluru',id:170},{name:'Mysuru',id:171},{name:'Raichur',id:172},{name:'Shivamogga',id:173},{name:'Shravanabelagola',id:174},{name:'Shrirangapattana',id:175},{name:'Tumkuru',id:176},{name:'Alappuzha',id:177},{name:'Badagara',id:178},{name:'Idukki',id:179},{name:'Kannur',id:180},{name:'Kochi',id:181},{name:'Kollam',id:182},{name:'Kottayam',id:183},{name:'Kozhikode',id:184},{name:'Mattancheri',id:185},{name:'Palakkad',id:186},{name:'Thalassery',id:187},{name:'Thiruvananthapuram',id:188},{name:'Thrissur',id:189},{name:'Balaghat',id:190},{name:'Barwani',id:191},{name:'Betul',id:192},{name:'Bharhut',id:193},{name:'Bhind',id:194},{name:'Bhojpur',id:195},{name:'Bhopal',id:196},{name:'Burhanpur',id:197},{name:'Chhatarpur',id:198},{name:'Chhindwara',id:199},{name:'Damoh',id:200},{name:'Datia',id:201},{name:'Dewas',id:202},{name:'Dhar',id:203},{name:'Guna',id:204},{name:'Gwalior',id:205},{name:'Hoshangabad',id:206},{name:'Indore',id:207},{name:'Itarsi',id:208},{name:'Jabalpur',id:209},{name:'Jhabua',id:210},{name:'Khajuraho',id:211},{name:'Khandwa',id:212},{name:'Khargon',id:213},{name:'Maheshwar',id:214},{name:'Mandla',id:215},{name:'Mandsaur',id:216},{name:'Mhow',id:217},{name:'Morena',id:218},{name:'Murwara',id:219},{name:'Narsimhapur',id:220},{name:'Narsinghgarh',id:221},{name:'Narwar',id:222},{name:'Neemuch',id:223},{name:'Nowgong',id:224},{name:'Orchha',id:225},{name:'Panna',id:226},{name:'Raisen',id:227},{name:'Rajgarh',id:228},{name:'Ratlam',id:229},{name:'Rewa',id:230},{name:'Sagar',id:231},{name:'Sarangpur',id:232},{name:'Satna',id:233},{name:'Sehore',id:234},{name:'Seoni',id:235},{name:'Shahdol',id:236},{name:'Shajapur',id:237},{name:'Sheopur',id:238},{name:'Shivpuri',id:239},{name:'Ujjain',id:240},{name:'Vidisha',id:241},{name:'Ahmadnagar',id:242},{name:'Akola',id:243},{name:'Amravati',id:244},{name:'Aurangabad',id:245},{name:'Bhandara',id:246},{name:'Bhusawal',id:247},{name:'Bid',id:248},{name:'Buldana',id:249},{name:'Chandrapur',id:250},{name:'Daulatabad',id:251},{name:'Dhule',id:252},{name:'Jalgaon',id:253},{name:'Kalyan',id:254},{name:'Karli',id:255},{name:'Kolhapur',id:256},{name:'Mahabaleshwar',id:257},{name:'Malegaon',id:258},{name:'Matheran',id:259},{name:'Mumbai',id:260},{name:'Nagpur',id:261},{name:'Nanded',id:262},{name:'Nashik',id:263},{name:'Osmanabad',id:264},{name:'Pandharpur',id:265},{name:'Parbhani',id:266},{name:'Pune',id:267},{name:'Ratnagiri',id:268},{name:'Sangli',id:269},{name:'Satara',id:270},{name:'Sevagram',id:271},{name:'Solapur',id:272},{name:'Thane',id:273},{name:'Ulhasnagar',id:274},{name:'Vasai-Virar',id:275},{name:'Wardha',id:276},{name:'Yavatmal',id:277},{name:'Imphal',id:278},{name:'Cherrapunji',id:279},{name:'Shillong',id:280},{name:'Aizawl',id:281},{name:'Lunglei',id:282},{name:'Kohima',id:283},{name:'Mon',id:284},{name:'Phek',id:285},{name:'Wokha',id:286},{name:'Zunheboto',id:287},{name:'Balangir',id:288},{name:'Baleshwar',id:289},{name:'Baripada',id:290},{name:'Bhubaneshwar',id:291},{name:'Brahmapur',id:292},{name:'Cuttack',id:293},{name:'Dhenkanal',id:294},{name:'Keonjhar',id:295},{name:'Konark',id:296},{name:'Koraput',id:297},{name:'Paradip',id:298},{name:'Phulabani',id:299},{name:'Puri',id:300},{name:'Sambalpur',id:301},{name:'Udayagiri',id:302},{name:'Karaikal',id:303},{name:'Mahe',id:304},{name:'Puducherry',id:305},{name:'Yanam',id:306},{name:'Amritsar',id:307},{name:'Batala',id:308},{name:'Chandigarh',id:309},{name:'Faridkot',id:310},{name:'Firozpur',id:311},{name:'Gurdaspur',id:312},{name:'Hoshiarpur',id:313},{name:'Jalandhar',id:314},{name:'Kapurthala',id:315},{name:'Ludhiana',id:316},{name:'Nabha',id:317},{name:'Patiala',id:318},{name:'Rupnagar',id:319},{name:'Sangrur',id:320},{name:'Abu',id:321},{name:'Ajmer',id:322},{name:'Alwar',id:323},{name:'Amer',id:324},{name:'Barmer',id:325},{name:'Beawar',id:326},{name:'Bharatpur',id:327},{name:'Bhilwara',id:328},{name:'Bikaner',id:329},{name:'Bundi',id:330},{name:'Chittaurgarh',id:331},{name:'Churu',id:332},{name:'Dhaulpur',id:333},{name:'Dungarpur',id:334},{name:'Ganganagar',id:335},{name:'Hanumangarh',id:336},{name:'Jaipur',id:337},{name:'Jaisalmer',id:338},{name:'Jalor',id:339},{name:'Jhalawar',id:340},{name:'Jhunjhunu',id:341},{name:'Jodhpur',id:342},{name:'Kishangarh',id:343},{name:'Kota',id:344},{name:'Merta',id:345},{name:'Nagaur',id:346},{name:'Nathdwara',id:347},{name:'Pali',id:348},{name:'Phalodi',id:349},{name:'Pushkar',id:350},{name:'Sawai Madhopur',id:351},{name:'Shahpura',id:352},{name:'Sikar',id:353},{name:'Sirohi',id:354},{name:'Tonk',id:355},{name:'Udaipur',id:356},{name:'Gangtok',id:357},{name:'Gyalsing',id:358},{name:'Lachung',id:359},{name:'Mangan',id:360},{name:'Arcot',id:361},{name:'Chengalpattu',id:362},{name:'Chennai',id:363},{name:'Chidambaram',id:364},{name:'Coimbatore',id:365},{name:'Cuddalore',id:366},{name:'Dharmapuri',id:367},{name:'Dindigul',id:368},{name:'Erode',id:369},{name:'Kanchipuram',id:370},{name:'Kanniyakumari',id:371},{name:'Kodaikanal',id:372},{name:'Kumbakonam',id:373},{name:'Madurai',id:374},{name:'Mamallapuram',id:375},{name:'Nagappattinam',id:376},{name:'Nagercoil',id:377},{name:'Palayankottai',id:378},{name:'Pudukkottai',id:379},{name:'Rajapalaiyam',id:380},{name:'Ramanathapuram',id:381},{name:'Salem',id:382},{name:'Thanjavur',id:383},{name:'Tiruchchirappalli',id:384},{name:'Tirunelveli',id:385},{name:'Tiruppur',id:386},{name:'Tuticorin',id:387},{name:'Udhagamandalam',id:388},{name:'Vellore',id:389},{name:'Hyderabad',id:390},{name:'Karimnagar',id:391},{name:'Khammam',id:392},{name:'Mahbubnagar',id:393},{name:'Nizamabad',id:394},{name:'Sangareddi',id:395},{name:'Warangal',id:396},{name:'Agartala',id:397},{name:'Agra',id:398},{name:'Aligarh',id:399},{name:'Allahabad',id:400},{name:'Amroha',id:401},{name:'Ayodhya',id:402},{name:'Azamgarh',id:403},{name:'Bahraich',id:404},{name:'Ballia',id:405},{name:'Banda',id:406},{name:'Bara Banki',id:407},{name:'Bareilly',id:408},{name:'Basti',id:409},{name:'Bijnor',id:410},{name:'Bithur',id:411},{name:'Budaun',id:412},{name:'Bulandshahr',id:413},{name:'Deoria',id:414},{name:'Etah',id:415},{name:'Etawah',id:416},{name:'Faizabad',id:417},{name:'Farrukhabad-cum-Fatehgarh',id:418},{name:'Fatehpur',id:419},{name:'Fatehpur Sikri',id:420},{name:'Ghaziabad',id:421},{name:'Ghazipur',id:422},{name:'Gonda',id:423},{name:'Gorakhpur',id:424},{name:'Hamirpur',id:425},{name:'Hardoi',id:426},{name:'Hathras',id:427},{name:'Jalaun',id:428},{name:'Jaunpur',id:429},{name:'Jhansi',id:430},{name:'Kannauj',id:431},{name:'Kanpur',id:432},{name:'Lakhimpur',id:433},{name:'Lalitpur',id:434},{name:'Lucknow',id:435},{name:'Mainpuri',id:436},{name:'Mathura',id:437},{name:'Meerut',id:438},{name:'Mirzapur-Vindhyachal',id:439},{name:'Moradabad',id:440},{name:'Muzaffarnagar',id:441},{name:'Partapgarh',id:442},{name:'Pilibhit',id:443},{name:'Rae Bareli',id:444},{name:'Rampur',id:445},{name:'Saharanpur',id:446},{name:'Sambhal',id:447},{name:'Shahjahanpur',id:448},{name:'Sitapur',id:449},{name:'Sultanpur',id:450},{name:'Tehri',id:451},{name:'Varanasi',id:452},{name:'Almora',id:453},{name:'Dehra Dun',id:454},{name:'Haridwar',id:455},{name:'Mussoorie',id:456},{name:'Nainital',id:457},{name:'Pithoragarh',id:458},{name:'Alipore',id:459},{name:'Alipur Duar',id:460},{name:'Asansol',id:461},{name:'Baharampur',id:462},{name:'Bally',id:463},{name:'Balurghat',id:464},{name:'Bankura',id:465},{name:'Baranagar',id:466},{name:'Barasat',id:467},{name:'Barrackpore',id:468},{name:'Basirhat',id:469},{name:'Bhatpara',id:470},{name:'Bishnupur',id:471},{name:'Budge Budge',id:472},{name:'Burdwan',id:473},{name:'Chandernagore',id:474},{name:'Darjiling',id:475},{name:'Diamond Harbour',id:476},{name:'Dum Dum',id:477},{name:'Durgapur',id:478},{name:'Halisahar',id:479},{name:'Haora',id:480},{name:'Hugli',id:481},{name:'Ingraj Bazar',id:482},{name:'Jalpaiguri',id:483},{name:'Kalimpong',id:484},{name:'Kamarhati',id:485},{name:'Kanchrapara',id:486},{name:'Kharagpur',id:487},{name:'Koch Bihar',id:488},{name:'Kolkata',id:489},{name:'Krishnanagar',id:490},{name:'Malda',id:491},{name:'Midnapore',id:492},{name:'Murshidabad',id:493},{name:'Navadwip',id:494},{name:'Palashi',id:495},{name:'Panihati',id:496},{name:'Purulia',id:497},{name:'Raiganj',id:498},{name:'Santipur',id:499},{name:'Shantiniketan',id:500},{name:'Shrirampur',id:501},{name:'Siliguri',id:502},{name:'Siuri',id:503},{name:'Tamluk',id:504},{name:'Titagarh',id:505}];
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : cities.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class citieslistinput extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        value: "",
        suggestions: []
      };
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
    // fetch(`https://swapi.co/api/people/?search=${value}`)
    // .then(response => response.json())
    // .then(data => this.setState({ suggestions: data.results }))
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Select City",
      value,
      onChange: this.onChange
    };
    return (
    
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    
    );
  }
}

export default citieslistinput;
