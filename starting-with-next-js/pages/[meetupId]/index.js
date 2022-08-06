import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.traveller.com.au/content/dam/images/g/o/3/6/k/o/image.related.articleLeadwide.620x349.go36hx.png/1460702656253.jpg"
      title="First Meetup"
      address="Kathmandu Nepal"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId; // meetupId because its the dynamic name in the folder

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://www.traveller.com.au/content/dam/images/g/o/3/6/k/o/image.related.articleLeadwide.620x349.go36hx.png/1460702656253.jpg",
        title: "First Meetup",
        address: "Kathmandu Nepal",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
