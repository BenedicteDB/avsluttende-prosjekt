<script>
    import {db} from "../../firebase.js"
    export let productID

  /*   let visible = false */
    let title = "";
    let content = "";
    let skintype = "";
    let age = "";
    let name = ""
            
    //Her adder jeg på fields i subcollection reviews. Dette kobler jeg til inputtene jeg har i html. 
    const addReview = () => {
        db.collection("products").doc(productID).collection("reviews").add({
            title: title,
            content: content,
            skintype: skintype,
            age: age,
            name: name
        }); 
            title = "";
            content = "";
            skintype = "";
            age = ""
            name = ""
    };
/*         const openWriteReview = () => {
    document.getElementById("form_container").style.height = "75%";
    visible = true
}

    const closeWriteReview = () => {
        document.getElementById("form_container").style.height = "0";
        visible = false
   
} */
</script>

    <div class="title">
        <h4>Reviews</h4>
       <!--  <button on:click={openWriteReview} class="btn_write">Write Review</button> -->
    </div>
    <div id="form_container">
        <div class="form_inner">
            <form on:submit|preventDefault={addReview}>
                <div class="form_title">
                    <h4>WRITE REVIEW</h4>
                </div>
                <!-- <div class="closebtn" on:click={closeWriteReview}>x</div> -->
                <div class="name_question" style="padding-top:1rem;">
                    <div class="input_title">
                        <h3>NAME*</h3>
                    </div>
                    <div class="answer">
                        <input type="text"  placeholder="Your Name" bind:value={name}>
                    </div>
                </div>
                <div class="title_question" style="padding-top:1rem;">
                    <div class="input_title">
                        <h3>TITLE*</h3>
                    </div>
                    <div class="answer">
                        <input type="text"  placeholder="Write Your Review Title" bind:value={title}>
                    </div>
                </div>
                <div class="content_question" style="padding-top:1rem;">
                    <div class="input_title">
                        <h3>CONTENTS*</h3>
                    </div>
                    <div class="answer inp_contents">
                        <textarea type="text"  placeholder="Write Your Review" bind:value={content}></textarea>
                    </div>
                </div>
<!-- Denne koden blir lang og er skrevet sånn for at jeg kunne style radio button slik jeg ville -->
                <div class="skintype_select group1">
                    <div class="input_title">
                        <h3>Skin Type</h3>
                    </div>
                    <div class="select_inner">    
                        <div class="select_answer">
                            <input type="radio" id="_normal"  name="skintype" value="normal" bind:group={skintype}>
                            <label for="_normal" style="display:flex;">
                                <span>
                                    Normal
                                </span>
                            </label>
                        </div>
                        <div class="select_answer">
                            <input type="radio" id="_oily" name="skintype" value="oily" bind:group={skintype}>
                            <label for="_oily" style="display:flex; ">
                                <span>
                                    Oily
                                </span>
                            </label>
                        </div>
                        <div class="select_answer">
                            <input type="radio" id="_dry" name="skintype" value="dry" bind:group={skintype}>
                            <label for="_dry" style="display:flex; ">
                                <span>
                                    Dry
                                </span>
                            </label>
                        </div>
                        <div class="select_answer">
                            <input type="radio" id="_sensitive" name="skintype" value="sensitive" bind:group={skintype}>
                            <label for="_sensitive" style="display:flex; ">
                                <span>
                                    Sensitive
                                </span>
                            </label>
                        </div>
                        <div class="select_answer">
                            <input type="radio" id="_combination" name="skintype" value="combination" bind:group={skintype}>
                            <label for="_combination" style="display:flex; ">
                                <span>
                                    Combination
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="skintype_select group2" style="padding-top:1rem;">
                    <div class="input_title">
                        <h3>Age</h3>
                    </div>
                        
                    <div class="select_inner">    
                        <div class="select_answer">
                            <input type="radio" id="_teen"  name="age" value="teen" bind:group={age}>
                            <label for="_teen" style="display:flex;">
                                <span>
                                    Teen
                                </span>
                            </label>
                        </div>
                        <div class="select_answer">
                            <input type="radio" id="_a20" name="age" value="20s" bind:group={age}>
                            <label for="_a20" style="display:flex; ">
                                <span>
                                    20s
                                </span>
                            </label>
                        </div>
                        <div class="select_answer">
                            <input type="radio" id="_a30" name="age" value="30s" bind:group={age}>
                            <label for="_a30" style="display:flex; ">
                                <span>
                                    30s
                                </span>
                            </label>
                        </div>
                        <div class="select_answer">
                            <input type="radio" id="_a40" name="age" value="40s" bind:group={age}>
                            <label for="_a40" style="display:flex; ">
                                <span>
                                    40s
                                </span>
                            </label>
                        </div>
                        <div class="select_answer">
                            <input type="radio" id="_a50" name="age" value="50s" bind:group={age}>
                            <label for="_a50" style="display:flex; ">
                                <span>
                                   50s
                                </span>
                            </label>
                        </div>
                        <div class="select_answer">
                            <input type="radio" id="_a50p" name="age" value="50s +" bind:group={age}>
                            <label for="_a50p" style="display:flex; ">
                                <span>
                                   50s +
                                </span>
                            </label>
                        </div>

                    </div>
                </div>
                <button class="_input" id="submit" type="submit" value="SUBMIT">SUBMIT</button>
            </form>
        </div>
    </div>


<style>

.title{
    border-bottom: 1px solid black;
    display: flex;
}

h4{
    text-transform: uppercase;
    font-size: 18px;
    margin: 1.5rem;
}

/* .btn_write{
    background-color: black;
    color: white;
    width: 24%;
    height: 2rem;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
}
 */
._input{
    background-color: black;
    color: white;
    margin-top: 10px;
    height: 30px;
    width: 60%;
    margin-bottom: 10px;
}
 
#form_container{
    background-color: #f8f8f8;
    width:100%;
    padding-bottom: 2rem;
   
    
}

.form_inner{
    display: block;
    text-align: center;

}
/* .closebtn{
    font-size: 21px;
    font-weight: 200;
    color:black;
    float: right;
    padding-right: 10px;
    padding-top: 15px;
    cursor: pointer;

} */

form{
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    width: 40%;
}

.form_title{
    border-bottom: 1px solid black;
    text-align: center;
}
h3{
    font-size: 13px;
    margin: 0.3rem;
    padding:0;
}
.answer > input, textarea{
    box-sizing: border-box;
    width: 100%;
    height: 2.7rem;
    margin-top: 2%;
    padding-left: 3%;
    border: 1px solid rgba(51, 50, 50, 0.822);
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
}

textarea{
    resize: none;
    height: 20rem;
}

.select_inner{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
}

.select_answer>input[type="radio"] {
  opacity: 0;
  width: 0;
  position: absolute;
}

.select_answer>label {
    border: 1px solid rgba(51, 50, 50, 0.822);
    font-size: 12px;
    height: 2rem;
    width: 100%;
    font-weight: 600;
    justify-content: center;
    cursor: pointer;
}

.select_answer span{
    padding-top: 10px;
}

.select_answer>input[type="radio"]:checked + label {
    color:white;
    background-color: #0076cf
}

@media screen and (max-width: 900px){
	form{
		width:60%;
	}
	
}

@media screen and (max-width: 700px){
	form{
		width:80%;
	}
	
}

</style>