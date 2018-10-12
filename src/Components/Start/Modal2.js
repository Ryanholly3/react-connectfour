import React from "react"


const Modal2 = (props) => {
  return (
    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Pick Your Character 2</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <img  src="http://icons.iconarchive.com/icons/sykonist/looney-tunes/128/Bugs-Bunny-Carrot-icon.png"></img>
          <img  src="http://icons.iconarchive.com/icons/sykonist/looney-tunes/128/Daffy-Duck-Angry-icon.png"></img>
          <img  src="http://icons.iconarchive.com/icons/sykonist/looney-tunes/128/Elmer-Fudd-Hunting-icon.png"></img>
          <img  src="http://icons.iconarchive.com/icons/sykonist/looney-tunes/128/Marvin-Martian-icon.png"></img>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Modal2
