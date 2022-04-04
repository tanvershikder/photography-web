import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h1>what is context api ?</h1>
                <p><strong>ans :</strong> context Api prevent props diling .its provides a way to pass data through the component tree without having to pass props down manually at every level.In Normal React application, data is passed top-down (parent to child) via props,but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.  <br></br>
                    context api হল এমন একটি মাধ্যম যা props dilling সমস্যা প্রতিরোধ করে । এইটার প্রতি component এ ডাটা props আকারে না পাটিয়ে এটি component tree এর মাধ্যমে ডাটা পাঠায় । একটি নরামাল React application এ data passed হয় top-down (parent to child) ভাবে কিন্তু এইটি props আকারে ডাটা না পাটিয়ে ট্রি আকারে ডাটা পাঠায় ।
                </p>
            </div>
            <div>
                <h1>sementic tag কী ?</h1>
                <p><strong>ans :</strong>
                    একটি Semantic Elements এর প্রধান কাজ হল পরিষ্কারভাবে ব্রাউজার এবং ডেভেলপার উভয় এর অর্থ বর্ণনা করা। এক কথাই বলা যাই HTML5 semantic elements আধুনিক সকল Browser এই  Support করে।
                    <br></br><br></br>
                    non-semantic elements এর উদাহরণ:
                    <br></br>
                    div and span - Tells nothing about its  content.
                    <br></br><br></br>
                    semantic elements এর উদাহরণ:
                    <br></br>
                    form, table, and img - Clearly defines its content

                    এর উপাদান গুলো হল ঃ aside tag , header tag , command , details ইত্যাদি ।
                </p>

            </div>
            <div>
                <h1>inline and inline block এর মাঝে পাথ্যর্ক কি?</h1>
                <p>
                <br /> <strong>inline :</strong> <br></br>
                    1/ এইটার element এ height width set করার আনুমতি দেয় না ।<br></br>
                    2/ top bottom margin/padding দেওয়া যাই না ।<br></br>
                    3/ এইটা element শেষে line break add করে ।<br></br><br></br>
                    
                    <strong>inline-block :</strong><br></br>
                    1/ এইটার element এ height width set করার আনুমতি দেয় ।<br></br>
                    2/ top bottom margin/padding দেওয়া যাই ।<br></br>
                    3/ এইটা element শেষে line break add করে না ।
                </p>

            </div>
        </div>
    );
};

export default Blogs;