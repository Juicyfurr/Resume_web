import React, { useState } from 'react';
import './Tabview.css';
import img7 from './logos/Profile.svg';

const TabView = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
    <div className="containers">
        <div className="tab-view">
            <div className="tabs">
                <button
                className={activeTab === 1 ? 'active' : ''}
                onClick={() => handleTabClick(1)}
                >
                <h5><i>Welcome.js</i></h5>
                </button>
                <button
                className={activeTab === 2 ? 'active' : ''}
                onClick={() => handleTabClick(2)}
                >
                <h5>Experience.js</h5>
                </button>
                <button
                className={activeTab === 3 ? 'active' : ''}
                onClick={() => handleTabClick(3)}
                >
                <h5>Education.js</h5>
                </button>
            </div>
        </div> 
          
        
    </div>
    <div className="tab-content">
        {activeTab === 1 && 
        <div className='intro'>
            <h1>Rajat Jha</h1>
            <div><p1 className="Designation">Technology Analyst <span style={{ color: '#e79a00', fontSize:'larger'}}>(3.6 yrs)</span></p1></div>
            <div><p5 className="DOB">(Born, the year iMac was introduced.11/02/1998)</p5></div>
            <div><img className="image7" src={img7} alt="" /></div> 
            <div className='Summary'>
                <h3 className='tags'>&lt;h3&gt;</h3><h3>Summary</h3><h3 className='tags'>&lt;/h3&gt;</h3><br/><br/><br/>
                <p4 className='tags'>&lt;p&gt;</p4>
                <p4><i>
                Passionate and motivated aspiring Frontend Developer with a strong foundation in web development technologies. Dedicated to creating user-friendly, visually appealing, and responsive web applications. A quick learner and effective problem solver with a commitment to continuous improvement.
                </i></p4>
                <p4 className='tags'>&lt;/p&gt;</p4>
            </div>
            <div className='box'><label><input type="checkbox" name="myCheckbox" value="isChecked" checked/> Show welcome page on startup</label></div>
        </div>}

        {activeTab === 2 && 
        <>
            <div>
                <h6 className='head'>&lt;h1&gt;<span style={{ color: '#ffffff' }}>Experience & Projects</span>&lt;/h1&gt;</h6>
                <p className='body1'>
                    <div className='para'>&lt;p&gt;</div>
                    <div className='one' style={{ lineHeight: '1', textIndent: '30px', fontSize: '25px' }}>
                    <p><span style={{ color: 'rgb(0, 128, 0)'}}>A.</span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br /></p>
                    <p><span style={{ color: '#e79a00'}}>Trained in: </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br/></p>
                    <p>JAVA, Database(MySQL), HTML, CSS, JAVAScript and Angular <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br/></p>
                    <p><span style={{ color: '#e79a00'}}>Final Project: </span> E- Commerce website Development in Angular. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br/></p>
                    <p><span style={{ color: '#e79a00'}}>My contribution: </span> Mostly the Frontend development and designing in HTML and CSS. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br/></p>
                    </div>
                
                    <div className='two' style={{ lineHeight: '1', textIndent: '30px', fontSize: '25px' }}>
                    <p><span style={{ color: 'rgb(0, 128, 0)'}}>B. </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p><span style={{ color: '#e79a00'}}>Go Language (by Google) migration: </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p><span style={{ color: '#e79a00'}}>AT&T Communication </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p><span style={{ color: '#e79a00'}}>DirecTV </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p><span style={{ color: '#e79a00'}}>Skills and Technologies used - </span> JAVA, Go Lang, JIRA <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p><span style={{ color: '#e79a00'}}>About the Project: </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p>The project was the migration of the pre-existing DirecTV project from JAVA to GoLang. <br /></p>
                    <p><span style={{ color: '#e79a00'}}>My contribution: </span> Was responsible for the Go Lang tool which used to compare the output of the micro-services <br/></p>
                    <p>of both project from both language and provide the difference to the senior developers to make necessary <br/></p>
                    <p>adjustments in the code. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br/></p>
                    </div>    
                    
                    <div className='two' style={{ lineHeight: '1', textIndent: '30px', fontSize: '25px' }}>
                    <p><span style={{ color: 'rgb(0, 128, 0)'}}>C. </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p><span style={{ color: '#e79a00'}}>Wifi6 & Wifi6E QA Engineer - Manual and Automation: </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>  
                    <p><span style={{ color: '#e79a00'}}>Charter Communication </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p> 
                    <p><span style={{ color: '#e79a00'}}>Spectrum </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p> 
                    <p><span style={{ color: '#e79a00'}}>Skills and Technologies used - </span>Python, HTML, CSS, JAVAScript, PLUME Cloud, Wireshark, JIRA, TestRail, <br /></p>
                    <p>ChalkPage, Putty, WINScp, DHCPv6 server, RaspberryPi.<span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> </p>
                    <p><span style={{ color: '#e79a00'}}>Team Size:  </span>16 <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p> 
                    <p><span style={{ color: '#e79a00'}}>Roles and Responsibilities - </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p>a. Proficient in analysing new product features and translating them into comprehensive test plans.<br /></p>
                    <p>b. Extensive hands-on experience with AX Wi-Fi 6E routers, including configuration, troubleshooting, and <br /></p>
                    <p>optimisation. <br /></p>
                    <p>c. Manual and Automated Validation of router core functionalities. <br /></p>
                    <p>d. Installation, maintenance and troubleshooting of servers DHCPv6, TFTP. <br /></p>
                    <p>e. Performing the PROGRESSION, SANITY, and REGRESSION Testing on 6Ghz supported Wifi6E routers. <br /></p>
                    <p>f. Raising defects in the JIRA and Triggering the automation using API for SCP router testing. <br /></p>
                    <p>g. Doing failure analysis for the automation results and raising defects with the manual test. <br /></p>
                    <p>h. Automation of regular tasks like : <br /></p>
                    <p>i. Automation of Daily defect status mails at the EOD. <br /></p>
                    <p>ii. Automation of Chalk Page creation upon release of new builds for Testing. <br /></p>
                    <p><span style={{ color: '#e79a00'}}>Modules for Testing - </span> DNS, NTP, LAN, WAN Facing Posture. MAP-T, SNM-H, CUJO..etc <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    </div>

                    <div className='two' style={{ lineHeight: '1', textIndent: '30px', fontSize: '25px' }}>
                    <p><span style={{ color: 'rgb(0, 128, 0)'}}>D. </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p><span style={{ color: '#e79a00'}}>Independent Projects: </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p><span style={{ color: '#e79a00'}}>A. Automation of Daily defect status mails :  </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br/></p>
                    <p>Developed a Python Script which can collect the defects from the daily morning mail, store it in a shared Excel<br /></p>
                    <p> sheet in which the Status of the defect was updated by the team members who worked on it.<br /></p>
                    <p>Then the excel sheet was share attached to a mail body which again was auto-generated by the script and then<br /></p>
                    <p>sent across by the end of the day. Hence saving at least 30 mins per day effort.<br /></p>
                    <p><span style={{ color: '#e79a00'}}>Appreciation: </span> Was appreciated by the Manager as well as the Onsite Manager. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p><span style={{ color: '#e79a00'}}>B. Automation of Chalk Page creation: </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p>Developed a Python Script which can create a release Chalk Page as soon as a new build was <br /></p>
                    <p>released for Testing just with the help of JIRA Ticket. The script world take release JIRA ticket, <br /></p>
                    <p>user credentials and certain other project related variables to create a Chalk page where in all <br /></p>
                    <p>the details regarding the progress and defects will be updated. It utilises the JIRA and <br /></p>
                    <p>ChalkPage APIs along with other macros. Hence saving up-to 1 hour of effort whenever there <br /></p>
                    <p>is a new release. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p><span style={{ color: '#e79a00'}}>Appreciation: </span> Was appreciated by the Manager as well as the Onsite Manager. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p><span style={{ color: '#e79a00'}}>C. Web Resume on React : </span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>    
                    </div>
                    <div className='para'>&lt;/p&gt;</div>
                </p>
            </div>
        </>
        }
        {activeTab === 3 &&
        <> 
            <div>
            <h6 className='head'>&lt;h1&gt;<span style={{ color: '#ffffff' }}>Educational Background</span>&lt;/h1&gt;</h6>
            <p className='body1'>
                <div className='para'>&lt;p&gt;</div>
                <div className='two' style={{ lineHeight: '1', textIndent: '30px', fontSize: '25px' }}>
                <p><span style={{ color: 'rgb(0, 128, 0)'}}>A.</span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br /></p>
                    <p><span style={{ color: '#e79a00'}}>Graduation: <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></span></p>
                    <p>B.Tech in Electronics and Communication Engineering <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p> 
                    <p>S.R.M Institute of Science and Technology, Kattankulathur, Tamil Nadu <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p> 
                    <p>Finished with 76 % <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p><span style={{ color: '#e79a00'}}>Outstanding Achievements:</span> “O” Grade in Japanese Language <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                </div> <br />

                <div className='two' style={{ lineHeight: '1', textIndent: '30px', fontSize: '25px' }}>
                <p><span style={{ color: 'rgb(0, 128, 0)'}}>B.</span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br /></p>
                    <p><span style={{ color: '#e79a00'}}>12th Grade: <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></span></p> 
                    <p>Sunbeam English School, Bhagwanpur, Varanasi <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p>CBSE Pattern. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p><span style={{ color: '#e79a00'}}>Outstanding Achievements:</span> Secured 95% and 92% in Chemistry and Physics respectively. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p>Was an active participant of School Assembly and Events. Appreciated Orator. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                </div> <br />

                <div className='two' style={{ lineHeight: '1', textIndent: '30px', fontSize: '25px' }}>
                <p><span style={{ color: 'rgb(0, 128, 0)'}}>C.</span> <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span> <br /></p>
                    <p><span style={{ color: '#e79a00'}}>10th Grade: <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></span></p> 
                    <p>Sunbeam English School, Bhagwanpur, Varanasi <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p>CBSE Pattern. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p><span style={{ color: '#e79a00'}}>Outstanding Achievements:</span> Secured 9.0 CGPA and 9.0 GPA in all the subjects alike. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                    <p>Was an active participant of School Assembly and Events. Appreciated Orator. <span style={{ color: '#0087e0' }}>&lt;br/&gt;</span><br /></p>
                </div>
                <div className='para'>&lt;/p&gt;</div>
            </p>
            </div>
        </>    
        }
    </div>
    </>
  );
};

export default TabView;
