// OBJECTS 
// ----------------------------------------------------------------


// Object Declaration
// 1. store keyvalue pair 
// 2. unordered data / data retrival is not ordered  
// 3. keys are unique  
const post = {
    title: 'New Post',
    comments: 20,
    1: 'Hello World',
    nested: {
        nested1: 'Nested 1'
    },
    func: ()=>{
        return `${post.title} and ${post.comments}`;
    }
};

// object can be retued in any order
console.log({ post })
// access object key-pair by dot notation
console.log({ dotNotation: post.title });
// access nested object with dot notation 
console.log({ nestedDotNotation: post.nested.nested1 });
// access object key-pai by square notation 
console.log({ sqaureNotation: post['title'] });
// access nested object with square notation 
console.log({ nestedSquareNotation: post['nested']['nested1'] });

// Object destructuring  
const { title, comments } = post;
console.log({ destructured: { title, comments } });

// Pass by reference  
const change = (sampleObject) => {
    sampleObject.title = 'Old Post';
}
change(post);
console.log({title: post.title});

// iterate over object keys
for(const key in post){
    console.log('keys ==>',key)
}

// function inside object
console.log({objectFunc: post.func()});
// ---------------------------------------------------------------- 

