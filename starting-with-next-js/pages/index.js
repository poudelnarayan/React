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
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1, // update the data on every 1 second if there is a requests
  };
}
/*
This can only be exported from inside page component file and not from other component, only in component files inside of the page
folder.
and it has to be callled getStaticProps, this is a reserved name so to say.
Its job is to prepare props for this page. and these props then contain the data this page needs.

*/

export default HomePage;
