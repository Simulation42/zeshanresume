import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
            <div className="header">
                Download My Full Resume
            </div>
            <div className="bg1">
                <div className="name">
                    ZESHAN IQBAL
                </div>
                <div className="position">
                    Finance Analyst | Data Scientist
                </div>
                <div className="profile">
                </div>
                <div className="introCon">
                    <div className="about">
                        ABOUT ME
                    </div>
                    <div className="edu">
                        EDUCATION
                    </div>
                    <div className="about2">
                        Welcome to my website! My name is Zeshan and I have been
                        a financial analyst for almost a decade now. 
                        <br />
                        Since I was a young, I have always enjoyed solving puzzles
                        and that is how I view big data sets; one big puzzle. 
                        Finding patterns in data that no one else sees is the final 
                        piece of the challenge for me. 
                        <br />
                        Working at small companies to the fortune 50's has given me the
                        ability to translate complex questions to understandable insights
                        from a wide perspective. 

                    </div>
                    <div className="edu2">
                        <h2>GEORGIA INSTITUTE OF TECHNOLOGY</h2>
                        <h3>College of Management</h3>
                        <br />
                        Concentration in Accounting
                        <br />
                        Certificate in Finance
                    </div>
                </div>
            </div>
            <div className="bg2">
                    <h2>SKILLS</h2>
                    <hr></hr>
                    <div className="skill">
                        <div className="skillbox">
                        <div className="skill2">
                            <p>Microsoft Excel</p>
                            <h1>Advanced</h1>
                        </div>
                        <div className="skill3">
                            SAS
                            <h1>Proficient</h1>
                        </div>
                        <div className="skill6">
                            R/HADOOP
                            <h1>Proficient</h1>
                        </div>
                        </div>
                        <div className="skillbox2">
                        <div className="skill4">
                            Teradata SQL
                            <h1>Advanced</h1>
                        </div>
                        <div className="skill7">
                            Tableau
                            <h1>Advanced</h1>
                        </div>
                        </div>
                        <div className="skill5">
                            Google BigQuery
                            <h1>Advanced</h1>
                        </div>           
                    </div>
                <div className="workCon">
                    <h2>EXPERIENCE</h2>
                    <div className="expCon">
                        <div className="exp">
                            <h1>Mu Sigma</h1>
                            <hr />
                            <h3>Associate</h3>
                            <p>Impact Analysis</p>
                            <p>Event Analytics</p>
                            <p>Lead Time Analytics</p>
                            <p>Gross Margin Analytics</p>
                        </div>
                        <div className="exp2">
                            <h1>Home Depot</h1>
                            <hr />
                            <h3>Sr. Financial Analyst | Project Leader</h3>
                            <p>Sales Impact Analysis</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="infoCon">
                <div className="contact">
                <div className="contactCon">
                    <h2>QUICK ID</h2>
                    <p>Phone:     444-444-4444</p>
                    <p>Email:     example@gmail.com</p>
                    <p>Website:     example.com</p>
                    <p>Address:     Atlanta GA, 30328</p>
                </div>
                </div>
                <div className="mail">
                    <div className="mailCon">
                        <h2>CONTACT ME</h2>
                    </div>
                </div>
            </div>
            <div className="footer">
            © 2020 by Alex Cho
            </div>
            </div>
        )
    }
}

export default Home;