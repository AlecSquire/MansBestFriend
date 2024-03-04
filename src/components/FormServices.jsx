import React from "react";

function FormServices() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    console.log(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "2rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "#00B67A" }}>Services</h1>
      <label>
        What's your address? <input name="address" placeholder="TQ2" />
      </label>
      <label>
        What dates do you need for drop-off?
        <input type="date" name="dropoffDate" />
      </label>
      <label>
        What dates do you need for pick-up?
        <input type="date" name="pickupDate" />
      </label>
      <label>
        How many pets do you have?
        <input type="number" name="numberOfPets" min="1" max="3" />
      </label>
      <label>
        What size are your dogs?
        <select name="dogSize">
          <option value="0-7">0-7 kg</option>
          <option value="7-18">7-18 kg</option>
          <option value="18-45">18-45 kg</option>
          <option value="45+">45+ kg</option>
        </select>
      </label>
      <label>
        I have a puppy younger than one year old
        <input type="checkbox" name="puppy" />
      </label>
      <label>
        My dogs don’t like cats
        <input type="checkbox" name="dogsDontLikeCats" />
      </label>
      <label>
        My dogs don’t like other dogs
        <input type="checkbox" name="dogsDontLikeOtherDogs" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormServices;
