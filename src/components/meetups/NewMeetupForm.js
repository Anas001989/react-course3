import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const discriptionRef = useRef();
  
  function submitHandler(event){
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDiscription = discriptionRef.current.value;

    //discriptionRef.current.value = "Hi Hi Hi"
    const meetingData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      discription: enteredDiscription
    };

    /* console.log(meetingData.title); */
    props.onAddMeetup(meetingData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" type="text" required ref={titleRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='image'>Meetup Image</label>
            <input id='image' type='url' required ref={imageRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input id='address' type='text' required ref={addressRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='discription'>Discription</label>
            <textarea id='discription' required rows='5' ref={discriptionRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
