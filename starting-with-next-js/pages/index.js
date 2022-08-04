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

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
