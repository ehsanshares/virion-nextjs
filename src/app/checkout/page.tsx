// Virion template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function CheckoutPage() {
  return (
    <>
      <div className="checkout-form">
      <div className="container large-container checkout-layout">
      <div className="checkout-main">
      <div className="web-payments">
      <a aria-haspopup="dialog" aria-label="Apple Pay" className="apple-pay" role="button" tabIndex={0}>
      <div>
      </div>
      </a>
      <a aria-haspopup="dialog" role="button" tabIndex={0}>
      <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
      <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649">
      </polygon>
      <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443">
      </polygon>
      </defs>
      <g fill="none" fillRule="evenodd">
      <path d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469" fill="#4285F4">
      </path>
      <path d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16" fill="#34A853">
      </path>
      <g transform="translate(0 4)">
      <mask fill="#fff" id="google-mark-b">
      <use xlinkHref="#google-mark-a">
      </use>
      </mask>
      <path d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" fill="#FBBC04" mask="url(#google-mark-b)">
      </path>
      </g>
      <mask fill="#fff" id="google-mark-d">
      <use xlinkHref="#google-mark-c">
      </use>
      </mask>
      <path d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" fill="#EA4335" mask="url(#google-mark-d)">
      </path>
      </g>
      </svg>
      <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
      <polygon fill="#F05022" points="7 7 1 7 1 1 7 1">
      </polygon>
      <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1">
      </polygon>
      <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9">
      </polygon>
      <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9">
      </polygon>
      </g>
      </svg>
      <div>
                          Pay with browser.
                        </div>
      </a>
      </div>
      <form className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Customer Info
                        </h3>
      <div>
                          * Required
                        </div>
      </div>
      <fieldset className="block-content">
      <label htmlFor="wf-ecom-email">
                          Email *
                        </label>
      <input className="checkout-text-field" id="wf-ecom-email" name="email" required type="text" />
      </fieldset>
      </form>
      <form className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Shipping Address
                        </h3>
      <div>
                          * Required
                        </div>
      </div>
      <fieldset className="block-content">
      <label htmlFor="wf-ecom-shipping-name">
                          Full Name *
                        </label>
      <input className="checkout-text-field" id="wf-ecom-shipping-name" name="name" required type="text" />
      <label htmlFor="wf-ecom-shipping-address">
                          Street Address *
                        </label>
      <input className="checkout-text-field" id="wf-ecom-shipping-address" name="address_line1" required type="text" />
      <input aria-label="Shipping address optional" className="checkout-text-field" name="address_line2" type="text" />
      <div className="row">
      <div>
      <label htmlFor="wf-ecom-shipping-city">
                              City *
                            </label>
      <input className="checkout-text-field" id="wf-ecom-shipping-city" name="address_city" required type="text" />
      </div>
      <div>
      <label htmlFor="wf-ecom-shipping-state">
                              State/Province
                            </label>
      <input className="checkout-text-field" id="wf-ecom-shipping-state" name="address_state" type="text" />
      </div>
      <div>
      <label htmlFor="wf-ecom-shipping-zip">
                              Zip/Postal Code *
                            </label>
      <input className="checkout-text-field" id="wf-ecom-shipping-zip" name="address_zip" required type="text" />
      </div>
      </div>
      <label htmlFor="wf-ecom-shipping-country">
                          Country *
                        </label>
      <select className="checkout-text-field" id="wf-ecom-shipping-country" name="address_country">
      <option value="AF">
                            Afghanistan
                          </option>
      <option value="AX">
                            Aland Islands
                          </option>
      <option value="AL">
                            Albania
                          </option>
      <option value="DZ">
                            Algeria
                          </option>
      <option value="AS">
                            American Samoa
                          </option>
      <option value="AD">
                            Andorra
                          </option>
      <option value="AO">
                            Angola
                          </option>
      <option value="AI">
                            Anguilla
                          </option>
      <option value="AG">
                            Antigua and Barbuda
                          </option>
      <option value="AR">
                            Argentina
                          </option>
      <option value="AM">
                            Armenia
                          </option>
      <option value="AW">
                            Aruba
                          </option>
      <option value="AU">
                            Australia
                          </option>
      <option value="AT">
                            Austria
                          </option>
      <option value="AZ">
                            Azerbaijan
                          </option>
      <option value="BS">
                            Bahamas
                          </option>
      <option value="BH">
                            Bahrain
                          </option>
      <option value="BD">
                            Bangladesh
                          </option>
      <option value="BB">
                            Barbados
                          </option>
      <option value="BY">
                            Belarus
                          </option>
      <option value="BE">
                            Belgium
                          </option>
      <option value="BZ">
                            Belize
                          </option>
      <option value="BJ">
                            Benin
                          </option>
      <option value="BM">
                            Bermuda
                          </option>
      <option value="BT">
                            Bhutan
                          </option>
      <option value="BO">
                            Bolivia
                          </option>
      <option value="BQ">
                            Bonaire, Saint Eustatius and Saba
                          </option>
      <option value="BA">
                            Bosnia and Herzegovina
                          </option>
      <option value="BW">
                            Botswana
                          </option>
      <option value="BR">
                            Brazil
                          </option>
      <option value="IO">
                            British Indian Ocean Territory
                          </option>
      <option value="VG">
                            British Virgin Islands
                          </option>
      <option value="BN">
                            Brunei
                          </option>
      <option value="BG">
                            Bulgaria
                          </option>
      <option value="BF">
                            Burkina Faso
                          </option>
      <option value="BI">
                            Burundi
                          </option>
      <option value="CV">
                            Cabo Verde
                          </option>
      <option value="KH">
                            Cambodia
                          </option>
      <option value="CM">
                            Cameroon
                          </option>
      <option value="CA">
                            Canada
                          </option>
      <option value="KY">
                            Cayman Islands
                          </option>
      <option value="CF">
                            Central African Republic
                          </option>
      <option value="TD">
                            Chad
                          </option>
      <option value="CL">
                            Chile
                          </option>
      <option value="CN">
                            China
                          </option>
      <option value="CX">
                            Christmas Island
                          </option>
      <option value="CC">
                            Cocos Islands
                          </option>
      <option value="CO">
                            Colombia
                          </option>
      <option value="KM">
                            Comoros
                          </option>
      <option value="CK">
                            Cook Islands
                          </option>
      <option value="CR">
                            Costa Rica
                          </option>
      <option value="HR">
                            Croatia
                          </option>
      <option value="CU">
                            Cuba
                          </option>
      <option value="CW">
                            Curacao
                          </option>
      <option value="CY">
                            Cyprus
                          </option>
      <option value="CZ">
                            Czechia
                          </option>
      <option value="CD">
                            Democratic Republic of the Congo
                          </option>
      <option value="DK">
                            Denmark
                          </option>
      <option value="DJ">
                            Djibouti
                          </option>
      <option value="DM">
                            Dominica
                          </option>
      <option value="DO">
                            Dominican Republic
                          </option>
      <option value="EC">
                            Ecuador
                          </option>
      <option value="EG">
                            Egypt
                          </option>
      <option value="SV">
                            El Salvador
                          </option>
      <option value="GQ">
                            Equatorial Guinea
                          </option>
      <option value="ER">
                            Eritrea
                          </option>
      <option value="EE">
                            Estonia
                          </option>
      <option value="SZ">
                            Eswatini
                          </option>
      <option value="ET">
                            Ethiopia
                          </option>
      <option value="FK">
                            Falkland Islands
                          </option>
      <option value="FO">
                            Faroe Islands
                          </option>
      <option value="FJ">
                            Fiji
                          </option>
      <option value="FI">
                            Finland
                          </option>
      <option value="FR">
                            France
                          </option>
      <option value="GF">
                            French Guiana
                          </option>
      <option value="PF">
                            French Polynesia
                          </option>
      <option value="TF">
                            French Southern Territories
                          </option>
      <option value="GA">
                            Gabon
                          </option>
      <option value="GM">
                            Gambia
                          </option>
      <option value="GE">
                            Georgia
                          </option>
      <option value="DE">
                            Germany
                          </option>
      <option value="GH">
                            Ghana
                          </option>
      <option value="GI">
                            Gibraltar
                          </option>
      <option value="GR">
                            Greece
                          </option>
      <option value="GL">
                            Greenland
                          </option>
      <option value="GD">
                            Grenada
                          </option>
      <option value="GP">
                            Guadeloupe
                          </option>
      <option value="GU">
                            Guam
                          </option>
      <option value="GT">
                            Guatemala
                          </option>
      <option value="GG">
                            Guernsey
                          </option>
      <option value="GN">
                            Guinea
                          </option>
      <option value="GW">
                            Guinea-Bissau
                          </option>
      <option value="GY">
                            Guyana
                          </option>
      <option value="HT">
                            Haiti
                          </option>
      <option value="HN">
                            Honduras
                          </option>
      <option value="HK">
                            Hong Kong
                          </option>
      <option value="HU">
                            Hungary
                          </option>
      <option value="IS">
                            Iceland
                          </option>
      <option value="IN">
                            India
                          </option>
      <option value="ID">
                            Indonesia
                          </option>
      <option value="IR">
                            Iran
                          </option>
      <option value="IQ">
                            Iraq
                          </option>
      <option value="IE">
                            Ireland
                          </option>
      <option value="IM">
                            Isle of Man
                          </option>
      <option value="IL">
                            Israel
                          </option>
      <option value="IT">
                            Italy
                          </option>
      <option value="CI">
                            Ivory Coast
                          </option>
      <option value="JM">
                            Jamaica
                          </option>
      <option value="JP">
                            Japan
                          </option>
      <option value="JE">
                            Jersey
                          </option>
      <option value="JO">
                            Jordan
                          </option>
      <option value="KZ">
                            Kazakhstan
                          </option>
      <option value="KE">
                            Kenya
                          </option>
      <option value="KI">
                            Kiribati
                          </option>
      <option value="XK">
                            Kosovo
                          </option>
      <option value="KW">
                            Kuwait
                          </option>
      <option value="KG">
                            Kyrgyzstan
                          </option>
      <option value="LA">
                            Laos
                          </option>
      <option value="LV">
                            Latvia
                          </option>
      <option value="LB">
                            Lebanon
                          </option>
      <option value="LS">
                            Lesotho
                          </option>
      <option value="LR">
                            Liberia
                          </option>
      <option value="LY">
                            Libya
                          </option>
      <option value="LI">
                            Liechtenstein
                          </option>
      <option value="LT">
                            Lithuania
                          </option>
      <option value="LU">
                            Luxembourg
                          </option>
      <option value="MO">
                            Macao
                          </option>
      <option value="MG">
                            Madagascar
                          </option>
      <option value="MW">
                            Malawi
                          </option>
      <option value="MY">
                            Malaysia
                          </option>
      <option value="MV">
                            Maldives
                          </option>
      <option value="ML">
                            Mali
                          </option>
      <option value="MT">
                            Malta
                          </option>
      <option value="MH">
                            Marshall Islands
                          </option>
      <option value="MQ">
                            Martinique
                          </option>
      <option value="MR">
                            Mauritania
                          </option>
      <option value="MU">
                            Mauritius
                          </option>
      <option value="YT">
                            Mayotte
                          </option>
      <option value="MX">
                            Mexico
                          </option>
      <option value="FM">
                            Micronesia
                          </option>
      <option value="MD">
                            Moldova
                          </option>
      <option value="MC">
                            Monaco
                          </option>
      <option value="MN">
                            Mongolia
                          </option>
      <option value="ME">
                            Montenegro
                          </option>
      <option value="MS">
                            Montserrat
                          </option>
      <option value="MA">
                            Morocco
                          </option>
      <option value="MZ">
                            Mozambique
                          </option>
      <option value="MM">
                            Myanmar
                          </option>
      <option value="NA">
                            Namibia
                          </option>
      <option value="NR">
                            Nauru
                          </option>
      <option value="NP">
                            Nepal
                          </option>
      <option value="NL">
                            Netherlands
                          </option>
      <option value="NC">
                            New Caledonia
                          </option>
      <option value="NZ">
                            New Zealand
                          </option>
      <option value="NI">
                            Nicaragua
                          </option>
      <option value="NE">
                            Niger
                          </option>
      <option value="NG">
                            Nigeria
                          </option>
      <option value="NU">
                            Niue
                          </option>
      <option value="NF">
                            Norfolk Island
                          </option>
      <option value="KP">
                            North Korea
                          </option>
      <option value="MK">
                            North Macedonia
                          </option>
      <option value="MP">
                            Northern Mariana Islands
                          </option>
      <option value="NO">
                            Norway
                          </option>
      <option value="OM">
                            Oman
                          </option>
      <option value="PK">
                            Pakistan
                          </option>
      <option value="PW">
                            Palau
                          </option>
      <option value="PS">
                            Palestinian Territory
                          </option>
      <option value="PA">
                            Panama
                          </option>
      <option value="PG">
                            Papua New Guinea
                          </option>
      <option value="PY">
                            Paraguay
                          </option>
      <option value="PE">
                            Peru
                          </option>
      <option value="PH">
                            Philippines
                          </option>
      <option value="PN">
                            Pitcairn
                          </option>
      <option value="PL">
                            Poland
                          </option>
      <option value="PT">
                            Portugal
                          </option>
      <option value="PR">
                            Puerto Rico
                          </option>
      <option value="QA">
                            Qatar
                          </option>
      <option value="CG">
                            Republic of the Congo
                          </option>
      <option value="RE">
                            Reunion
                          </option>
      <option value="RO">
                            Romania
                          </option>
      <option value="RU">
                            Russia
                          </option>
      <option value="RW">
                            Rwanda
                          </option>
      <option value="BL">
                            Saint Barthelemy
                          </option>
      <option value="SH">
                            Saint Helena
                          </option>
      <option value="KN">
                            Saint Kitts and Nevis
                          </option>
      <option value="LC">
                            Saint Lucia
                          </option>
      <option value="MF">
                            Saint Martin
                          </option>
      <option value="PM">
                            Saint Pierre and Miquelon
                          </option>
      <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
      <option value="WS">
                            Samoa
                          </option>
      <option value="SM">
                            San Marino
                          </option>
      <option value="ST">
                            Sao Tome and Principe
                          </option>
      <option value="SA">
                            Saudi Arabia
                          </option>
      <option value="SN">
                            Senegal
                          </option>
      <option value="RS">
                            Serbia
                          </option>
      <option value="SC">
                            Seychelles
                          </option>
      <option value="SL">
                            Sierra Leone
                          </option>
      <option value="SG">
                            Singapore
                          </option>
      <option value="SX">
                            Sint Maarten
                          </option>
      <option value="SK">
                            Slovakia
                          </option>
      <option value="SI">
                            Slovenia
                          </option>
      <option value="SB">
                            Solomon Islands
                          </option>
      <option value="SO">
                            Somalia
                          </option>
      <option value="ZA">
                            South Africa
                          </option>
      <option value="GS">
                            South Georgia and the South Sandwich Islands
                          </option>
      <option value="KR">
                            South Korea
                          </option>
      <option value="SS">
                            South Sudan
                          </option>
      <option value="ES">
                            Spain
                          </option>
      <option value="LK">
                            Sri Lanka
                          </option>
      <option value="SD">
                            Sudan
                          </option>
      <option value="SR">
                            Suriname
                          </option>
      <option value="SJ">
                            Svalbard and Jan Mayen
                          </option>
      <option value="SE">
                            Sweden
                          </option>
      <option value="CH">
                            Switzerland
                          </option>
      <option value="SY">
                            Syria
                          </option>
      <option value="TW">
                            Taiwan
                          </option>
      <option value="TJ">
                            Tajikistan
                          </option>
      <option value="TZ">
                            Tanzania
                          </option>
      <option value="TH">
                            Thailand
                          </option>
      <option value="TL">
                            Timor Leste
                          </option>
      <option value="TG">
                            Togo
                          </option>
      <option value="TK">
                            Tokelau
                          </option>
      <option value="TO">
                            Tonga
                          </option>
      <option value="TT">
                            Trinidad and Tobago
                          </option>
      <option value="TN">
                            Tunisia
                          </option>
      <option value="TR">
                            Turkey
                          </option>
      <option value="TM">
                            Turkmenistan
                          </option>
      <option value="TC">
                            Turks and Caicos Islands
                          </option>
      <option value="TV">
                            Tuvalu
                          </option>
      <option value="VI">
                            U.S. Virgin Islands
                          </option>
      <option value="UG">
                            Uganda
                          </option>
      <option value="UA">
                            Ukraine
                          </option>
      <option value="AE">
                            United Arab Emirates
                          </option>
      <option value="GB">
                            United Kingdom
                          </option>
      <option value="US">
                            United States
                          </option>
      <option value="UM">
                            United States Minor Outlying Islands
                          </option>
      <option value="UY">
                            Uruguay
                          </option>
      <option value="UZ">
                            Uzbekistan
                          </option>
      <option value="VU">
                            Vanuatu
                          </option>
      <option value="VA">
                            Vatican
                          </option>
      <option value="VE">
                            Venezuela
                          </option>
      <option value="VN">
                            Vietnam
                          </option>
      <option value="WF">
                            Wallis and Futuna
                          </option>
      <option value="EH">
                            Western Sahara
                          </option>
      <option value="YE">
                            Yemen
                          </option>
      <option value="ZM">
                            Zambia
                          </option>
      <option value="ZW">
                            Zimbabwe
                          </option>
      </select>
      </fieldset>
      </form>
      <form className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Shipping Method
                        </h3>
      </div>
      <fieldset>
      <div>
      <label>
      <input name="shipping-method-choice" required type="radio" />
      <div>
      <div>
      </div>
      <div>
      </div>
      </div>
      <div>
      </div>
      </label>
      </div>
      <div>
      <div>
                            No shipping methods are available for the address given.
                          </div>
      </div>
      </fieldset>
      </form>
      <div className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Payment Info
                        </h3>
      <div>
                          * Required
                        </div>
      </div>
      <fieldset className="block-content">
      <label htmlFor="">
                          Card Number *
                        </label>
      <div className="checkout-text-field">
      <div>
      </div>
      <div className="reveal">
      </div>
      </div>
      <div className="row">
      <div>
      <label htmlFor="">
                              Expiration Date *
                            </label>
      <div className="checkout-text-field">
      <div>
      </div>
      <div className="reveal">
      </div>
      </div>
      </div>
      <div>
      <label htmlFor="">
                              Security Code *
                            </label>
      <div className="checkout-text-field">
      <div>
      </div>
      <div className="reveal">
      </div>
      </div>
      </div>
      </div>
      <div className="billing-address-toggle">
      <input checked className="checkbox" id="billing-address-toggle" type="checkbox" />
      <label className="checkbox-label" htmlFor="billing-address-toggle">
                            Billing address same as shipping
                          </label>
      </div>
      </fieldset>
      </div>
      <form className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Billing Address
                        </h3>
      <div>
                          * Required
                        </div>
      </div>
      <fieldset className="block-content">
      <label htmlFor="wf-ecom-billing-name">
                          Full Name *
                        </label>
      <input className="checkout-text-field" id="wf-ecom-billing-name" name="name" required type="text" />
      <label htmlFor="wf-ecom-billing-address">
                          Street Address *
                        </label>
      <input className="checkout-text-field" id="wf-ecom-billing-address" name="address_line1" required type="text" />
      <input aria-label="Billing address optional" className="checkout-text-field" name="address_line2" type="text" />
      <div className="row">
      <div>
      <label htmlFor="wf-ecom-billing-city">
                              City *
                            </label>
      <input className="checkout-text-field" id="wf-ecom-billing-city" name="address_city" required type="text" />
      </div>
      <div>
      <label htmlFor="wf-ecom-billing-state">
                              State/Province
                            </label>
      <input className="checkout-text-field" id="wf-ecom-billing-state" name="address_state" type="text" />
      </div>
      <div>
      <label htmlFor="wf-ecom-billing-zip">
                              Zip/Postal Code *
                            </label>
      <input className="checkout-text-field" id="wf-ecom-billing-zip" name="address_zip" required type="text" />
      </div>
      </div>
      <label htmlFor="wf-ecom-billing-country">
                          Country *
                        </label>
      <select className="checkout-text-field" id="wf-ecom-billing-country" name="address_country">
      <option value="AF">
                            Afghanistan
                          </option>
      <option value="AX">
                            Aland Islands
                          </option>
      <option value="AL">
                            Albania
                          </option>
      <option value="DZ">
                            Algeria
                          </option>
      <option value="AS">
                            American Samoa
                          </option>
      <option value="AD">
                            Andorra
                          </option>
      <option value="AO">
                            Angola
                          </option>
      <option value="AI">
                            Anguilla
                          </option>
      <option value="AG">
                            Antigua and Barbuda
                          </option>
      <option value="AR">
                            Argentina
                          </option>
      <option value="AM">
                            Armenia
                          </option>
      <option value="AW">
                            Aruba
                          </option>
      <option value="AU">
                            Australia
                          </option>
      <option value="AT">
                            Austria
                          </option>
      <option value="AZ">
                            Azerbaijan
                          </option>
      <option value="BS">
                            Bahamas
                          </option>
      <option value="BH">
                            Bahrain
                          </option>
      <option value="BD">
                            Bangladesh
                          </option>
      <option value="BB">
                            Barbados
                          </option>
      <option value="BY">
                            Belarus
                          </option>
      <option value="BE">
                            Belgium
                          </option>
      <option value="BZ">
                            Belize
                          </option>
      <option value="BJ">
                            Benin
                          </option>
      <option value="BM">
                            Bermuda
                          </option>
      <option value="BT">
                            Bhutan
                          </option>
      <option value="BO">
                            Bolivia
                          </option>
      <option value="BQ">
                            Bonaire, Saint Eustatius and Saba
                          </option>
      <option value="BA">
                            Bosnia and Herzegovina
                          </option>
      <option value="BW">
                            Botswana
                          </option>
      <option value="BR">
                            Brazil
                          </option>
      <option value="IO">
                            British Indian Ocean Territory
                          </option>
      <option value="VG">
                            British Virgin Islands
                          </option>
      <option value="BN">
                            Brunei
                          </option>
      <option value="BG">
                            Bulgaria
                          </option>
      <option value="BF">
                            Burkina Faso
                          </option>
      <option value="BI">
                            Burundi
                          </option>
      <option value="CV">
                            Cabo Verde
                          </option>
      <option value="KH">
                            Cambodia
                          </option>
      <option value="CM">
                            Cameroon
                          </option>
      <option value="CA">
                            Canada
                          </option>
      <option value="KY">
                            Cayman Islands
                          </option>
      <option value="CF">
                            Central African Republic
                          </option>
      <option value="TD">
                            Chad
                          </option>
      <option value="CL">
                            Chile
                          </option>
      <option value="CN">
                            China
                          </option>
      <option value="CX">
                            Christmas Island
                          </option>
      <option value="CC">
                            Cocos Islands
                          </option>
      <option value="CO">
                            Colombia
                          </option>
      <option value="KM">
                            Comoros
                          </option>
      <option value="CK">
                            Cook Islands
                          </option>
      <option value="CR">
                            Costa Rica
                          </option>
      <option value="HR">
                            Croatia
                          </option>
      <option value="CU">
                            Cuba
                          </option>
      <option value="CW">
                            Curacao
                          </option>
      <option value="CY">
                            Cyprus
                          </option>
      <option value="CZ">
                            Czechia
                          </option>
      <option value="CD">
                            Democratic Republic of the Congo
                          </option>
      <option value="DK">
                            Denmark
                          </option>
      <option value="DJ">
                            Djibouti
                          </option>
      <option value="DM">
                            Dominica
                          </option>
      <option value="DO">
                            Dominican Republic
                          </option>
      <option value="EC">
                            Ecuador
                          </option>
      <option value="EG">
                            Egypt
                          </option>
      <option value="SV">
                            El Salvador
                          </option>
      <option value="GQ">
                            Equatorial Guinea
                          </option>
      <option value="ER">
                            Eritrea
                          </option>
      <option value="EE">
                            Estonia
                          </option>
      <option value="SZ">
                            Eswatini
                          </option>
      <option value="ET">
                            Ethiopia
                          </option>
      <option value="FK">
                            Falkland Islands
                          </option>
      <option value="FO">
                            Faroe Islands
                          </option>
      <option value="FJ">
                            Fiji
                          </option>
      <option value="FI">
                            Finland
                          </option>
      <option value="FR">
                            France
                          </option>
      <option value="GF">
                            French Guiana
                          </option>
      <option value="PF">
                            French Polynesia
                          </option>
      <option value="TF">
                            French Southern Territories
                          </option>
      <option value="GA">
                            Gabon
                          </option>
      <option value="GM">
                            Gambia
                          </option>
      <option value="GE">
                            Georgia
                          </option>
      <option value="DE">
                            Germany
                          </option>
      <option value="GH">
                            Ghana
                          </option>
      <option value="GI">
                            Gibraltar
                          </option>
      <option value="GR">
                            Greece
                          </option>
      <option value="GL">
                            Greenland
                          </option>
      <option value="GD">
                            Grenada
                          </option>
      <option value="GP">
                            Guadeloupe
                          </option>
      <option value="GU">
                            Guam
                          </option>
      <option value="GT">
                            Guatemala
                          </option>
      <option value="GG">
                            Guernsey
                          </option>
      <option value="GN">
                            Guinea
                          </option>
      <option value="GW">
                            Guinea-Bissau
                          </option>
      <option value="GY">
                            Guyana
                          </option>
      <option value="HT">
                            Haiti
                          </option>
      <option value="HN">
                            Honduras
                          </option>
      <option value="HK">
                            Hong Kong
                          </option>
      <option value="HU">
                            Hungary
                          </option>
      <option value="IS">
                            Iceland
                          </option>
      <option value="IN">
                            India
                          </option>
      <option value="ID">
                            Indonesia
                          </option>
      <option value="IR">
                            Iran
                          </option>
      <option value="IQ">
                            Iraq
                          </option>
      <option value="IE">
                            Ireland
                          </option>
      <option value="IM">
                            Isle of Man
                          </option>
      <option value="IL">
                            Israel
                          </option>
      <option value="IT">
                            Italy
                          </option>
      <option value="CI">
                            Ivory Coast
                          </option>
      <option value="JM">
                            Jamaica
                          </option>
      <option value="JP">
                            Japan
                          </option>
      <option value="JE">
                            Jersey
                          </option>
      <option value="JO">
                            Jordan
                          </option>
      <option value="KZ">
                            Kazakhstan
                          </option>
      <option value="KE">
                            Kenya
                          </option>
      <option value="KI">
                            Kiribati
                          </option>
      <option value="XK">
                            Kosovo
                          </option>
      <option value="KW">
                            Kuwait
                          </option>
      <option value="KG">
                            Kyrgyzstan
                          </option>
      <option value="LA">
                            Laos
                          </option>
      <option value="LV">
                            Latvia
                          </option>
      <option value="LB">
                            Lebanon
                          </option>
      <option value="LS">
                            Lesotho
                          </option>
      <option value="LR">
                            Liberia
                          </option>
      <option value="LY">
                            Libya
                          </option>
      <option value="LI">
                            Liechtenstein
                          </option>
      <option value="LT">
                            Lithuania
                          </option>
      <option value="LU">
                            Luxembourg
                          </option>
      <option value="MO">
                            Macao
                          </option>
      <option value="MG">
                            Madagascar
                          </option>
      <option value="MW">
                            Malawi
                          </option>
      <option value="MY">
                            Malaysia
                          </option>
      <option value="MV">
                            Maldives
                          </option>
      <option value="ML">
                            Mali
                          </option>
      <option value="MT">
                            Malta
                          </option>
      <option value="MH">
                            Marshall Islands
                          </option>
      <option value="MQ">
                            Martinique
                          </option>
      <option value="MR">
                            Mauritania
                          </option>
      <option value="MU">
                            Mauritius
                          </option>
      <option value="YT">
                            Mayotte
                          </option>
      <option value="MX">
                            Mexico
                          </option>
      <option value="FM">
                            Micronesia
                          </option>
      <option value="MD">
                            Moldova
                          </option>
      <option value="MC">
                            Monaco
                          </option>
      <option value="MN">
                            Mongolia
                          </option>
      <option value="ME">
                            Montenegro
                          </option>
      <option value="MS">
                            Montserrat
                          </option>
      <option value="MA">
                            Morocco
                          </option>
      <option value="MZ">
                            Mozambique
                          </option>
      <option value="MM">
                            Myanmar
                          </option>
      <option value="NA">
                            Namibia
                          </option>
      <option value="NR">
                            Nauru
                          </option>
      <option value="NP">
                            Nepal
                          </option>
      <option value="NL">
                            Netherlands
                          </option>
      <option value="NC">
                            New Caledonia
                          </option>
      <option value="NZ">
                            New Zealand
                          </option>
      <option value="NI">
                            Nicaragua
                          </option>
      <option value="NE">
                            Niger
                          </option>
      <option value="NG">
                            Nigeria
                          </option>
      <option value="NU">
                            Niue
                          </option>
      <option value="NF">
                            Norfolk Island
                          </option>
      <option value="KP">
                            North Korea
                          </option>
      <option value="MK">
                            North Macedonia
                          </option>
      <option value="MP">
                            Northern Mariana Islands
                          </option>
      <option value="NO">
                            Norway
                          </option>
      <option value="OM">
                            Oman
                          </option>
      <option value="PK">
                            Pakistan
                          </option>
      <option value="PW">
                            Palau
                          </option>
      <option value="PS">
                            Palestinian Territory
                          </option>
      <option value="PA">
                            Panama
                          </option>
      <option value="PG">
                            Papua New Guinea
                          </option>
      <option value="PY">
                            Paraguay
                          </option>
      <option value="PE">
                            Peru
                          </option>
      <option value="PH">
                            Philippines
                          </option>
      <option value="PN">
                            Pitcairn
                          </option>
      <option value="PL">
                            Poland
                          </option>
      <option value="PT">
                            Portugal
                          </option>
      <option value="PR">
                            Puerto Rico
                          </option>
      <option value="QA">
                            Qatar
                          </option>
      <option value="CG">
                            Republic of the Congo
                          </option>
      <option value="RE">
                            Reunion
                          </option>
      <option value="RO">
                            Romania
                          </option>
      <option value="RU">
                            Russia
                          </option>
      <option value="RW">
                            Rwanda
                          </option>
      <option value="BL">
                            Saint Barthelemy
                          </option>
      <option value="SH">
                            Saint Helena
                          </option>
      <option value="KN">
                            Saint Kitts and Nevis
                          </option>
      <option value="LC">
                            Saint Lucia
                          </option>
      <option value="MF">
                            Saint Martin
                          </option>
      <option value="PM">
                            Saint Pierre and Miquelon
                          </option>
      <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
      <option value="WS">
                            Samoa
                          </option>
      <option value="SM">
                            San Marino
                          </option>
      <option value="ST">
                            Sao Tome and Principe
                          </option>
      <option value="SA">
                            Saudi Arabia
                          </option>
      <option value="SN">
                            Senegal
                          </option>
      <option value="RS">
                            Serbia
                          </option>
      <option value="SC">
                            Seychelles
                          </option>
      <option value="SL">
                            Sierra Leone
                          </option>
      <option value="SG">
                            Singapore
                          </option>
      <option value="SX">
                            Sint Maarten
                          </option>
      <option value="SK">
                            Slovakia
                          </option>
      <option value="SI">
                            Slovenia
                          </option>
      <option value="SB">
                            Solomon Islands
                          </option>
      <option value="SO">
                            Somalia
                          </option>
      <option value="ZA">
                            South Africa
                          </option>
      <option value="GS">
                            South Georgia and the South Sandwich Islands
                          </option>
      <option value="KR">
                            South Korea
                          </option>
      <option value="SS">
                            South Sudan
                          </option>
      <option value="ES">
                            Spain
                          </option>
      <option value="LK">
                            Sri Lanka
                          </option>
      <option value="SD">
                            Sudan
                          </option>
      <option value="SR">
                            Suriname
                          </option>
      <option value="SJ">
                            Svalbard and Jan Mayen
                          </option>
      <option value="SE">
                            Sweden
                          </option>
      <option value="CH">
                            Switzerland
                          </option>
      <option value="SY">
                            Syria
                          </option>
      <option value="TW">
                            Taiwan
                          </option>
      <option value="TJ">
                            Tajikistan
                          </option>
      <option value="TZ">
                            Tanzania
                          </option>
      <option value="TH">
                            Thailand
                          </option>
      <option value="TL">
                            Timor Leste
                          </option>
      <option value="TG">
                            Togo
                          </option>
      <option value="TK">
                            Tokelau
                          </option>
      <option value="TO">
                            Tonga
                          </option>
      <option value="TT">
                            Trinidad and Tobago
                          </option>
      <option value="TN">
                            Tunisia
                          </option>
      <option value="TR">
                            Turkey
                          </option>
      <option value="TM">
                            Turkmenistan
                          </option>
      <option value="TC">
                            Turks and Caicos Islands
                          </option>
      <option value="TV">
                            Tuvalu
                          </option>
      <option value="VI">
                            U.S. Virgin Islands
                          </option>
      <option value="UG">
                            Uganda
                          </option>
      <option value="UA">
                            Ukraine
                          </option>
      <option value="AE">
                            United Arab Emirates
                          </option>
      <option value="GB">
                            United Kingdom
                          </option>
      <option selected value="US">
                            United States
                          </option>
      <option value="UM">
                            United States Minor Outlying Islands
                          </option>
      <option value="UY">
                            Uruguay
                          </option>
      <option value="UZ">
                            Uzbekistan
                          </option>
      <option value="VU">
                            Vanuatu
                          </option>
      <option value="VA">
                            Vatican
                          </option>
      <option value="VE">
                            Venezuela
                          </option>
      <option value="VN">
                            Vietnam
                          </option>
      <option value="WF">
                            Wallis and Futuna
                          </option>
      <option value="EH">
                            Western Sahara
                          </option>
      <option value="YE">
                            Yemen
                          </option>
      <option value="ZM">
                            Zambia
                          </option>
      <option value="ZW">
                            Zimbabwe
                          </option>
      </select>
      </fieldset>
      </form>
      <div className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Items in Order
                        </h3>
      </div>
      <fieldset className="block-content">
      <div data-checkout-items="1" role="list">
      </div>
      </fieldset>
      </div>
      </div>
      <div className="checkout-aside">
      <div className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Order Summary
                        </h3>
      </div>
      <fieldset className="block-content">
      <div>
      <div>
                            Subtotal
                          </div>
      <div data-checkout-subtotal="1">
      </div>
      </div>
      <div>
      <div>
      <div>
      </div>
      <div>
      </div>
      </div>
      </div>
      <div>
      <div>
                            Total
                          </div>
      <div data-checkout-total="1">
      </div>
      </div>
      </fieldset>
      </div>
      <a className="checkout-button" data-place-order="1">
                      Place Order
                    </a>
      </div>
      </div>
      </div>
    </>
  );
}
