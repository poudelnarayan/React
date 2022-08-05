import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://www.traveller.com.au/content/dam/images/g/o/3/6/k/o/image.related.articleLeadwide.620x349.go36hx.png/1460702656253.jpg",
    address: "Nepal,Pokhara",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.traveller.com.au/content/dam/images/g/o/3/6/k/o/image.related.articleLeadwide.620x349.go36hx.png/1460702656253.jpg",
    address: "Nepal,Pokhara",
    description: "This is a Second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1, // update the data on every 1 second if there is a requests
//   };
// }

export async function getServerSideProps(context) {
  // you can get the request and response from the context
  const req = context.req;
  const res = context.res;
  // any code you write here will run on server not on the client side
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

/*
Which is better ? getServerSideProps() or getStaticProps() ?

  getServerSideProps might sound better because its guaranteed to run for every request. But that actually can be disadvantage,
  because that means that you need to wait for your page to be generated on every incoming request since we dont have 
  data that changes all the time in this project.
  And if you dont need access to the request object , lets say for authentication , getStaticProps() is actually better , because 
  there you pre-generate an HTML file , that file can then be stored and served by a CDN and that generally is faster than
  regenerating and fetching that data for every incoming request.
  You should really only use getServerSideProps if you need access to that concrete request object because you dont have access 
  to request and response in getStaticProps.
  or if you really have data that changes multiple times every seconds , then therefore even revalidate won't help you , 
  then getServerSideProps is a great choice.

*/

export default HomePage;
