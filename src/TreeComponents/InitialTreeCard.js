import React, { useState } from 'react';
import { Col, Modal, ModalHeader, ModalBody, ModalFooter, Row, Input, Label, Button } from 'reactstrap';

export default function InitialTreeCard() {

  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [relationShipTitle, setRelationShipTitle] = useState('');
  const [profileModalFormData, setProfileModalFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    gender: '',
    age: '',
    dateOfBirth: '',
    profilePicture: '',
    relationShip: '',
  });

  const [familyTreeList, setFamilyTreeList] = useState([]);

  const updateFieldState = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setProfileModalFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }));
  }

  // console.log('profileModalFormData', profileModalFormData);
  const handleChildRoot = (e, index, relship) => {
    const buttonList = document.querySelectorAll(".showButton");
    // buttonList[btnIdx].classList.add('showChildButton');
    // setProfileModalOpen(prev => !prev);
    setRelationShipTitle(prev => relship);
    // .............
    const parentLine = document.querySelectorAll(".parentLine");
    parentLine[index].classList.add('parentLinkLine');
    // .............
    // const parentWigit = document.getElementById('parentWigit');
    // parentWigit.classList.add('parentWigits');
    const parentWigit = document.querySelectorAll('.parentWigit');
    parentWigit[index].classList.add('parentWigits');
  }

  function submitForm() {
    // const newData = [];
    // const data = {...profileModalFormData};
    // const relationShip = profileModalFormData?.relationShip;
    // newData.push({ [relationShip]: {data}})
    // const treeList = [...familyTreeList, ...newData];
    const treeList = [...familyTreeList, profileModalFormData];
    setFamilyTreeList(treeList);
    setProfileModalOpen(prev => !prev);
    setRelationShipTitle('')
  }

  const x = familyTreeList.filter(x => x.relationShip === 'father');
  console.log('x', x);

  const closeProfileModal = () => {
    setProfileModalOpen(prev => !prev);
    setRelationShipTitle('')
    setProfileModalFormData({
      name: '',
      mobile: '',
      email: '',
      gender: '',
      age: '',
      dateOfBirth: '',
      profilePicture: '',
      relationShip: '',
    });
  }

  function displayProfilePic() {
    const Input = document.getElementById('photo');
    const img = document.getElementById('profilePic');

    if (Input.files && Input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        img.src = e.target.result;
        img.style.display = 'block';
        setProfileModalFormData(prev => ({
          ...prev,
          profilePicture: e.target.result
        }))
      };

      reader.readAsDataURL(Input.files[0]);
    }
  }

  const openProfileModal = (relationShip) => {
    setProfileModalOpen(prev => !prev);
    setProfileModalFormData(prev => ({
      ...prev,
      name: '',
      mobile: '',
      email: '',
      gender: '',
      age: '',
      dateOfBirth: '',
      profilePicture: '',
      relationShip,
    }));
  }
  console.log('familyTreeList', familyTreeList);

  return (
    <div className='treeView'>
      <div className="parentCard">
        <div className="column card-style">
          <div className="wrap">
            <div className='parentWigit' style={{ display: 'none' }}>
              <div class="profile-card" style={{ top: '-12rem', left: '0.5rem' }}>
                {/* <span class="skill">{familyTreeList.map(x => x.relationShip === 'father' && x.relationShip)}</span> */}
                <Button
                  id="addProfileBtn"
                  className="addProfileBtn"
                  onClick={(e) => openProfileModal('father')}>Father
                </Button>
                <div class="image">
                  <img src="assets/profileImage.jpg" alt="" class="profile-image" />
                </div>

                <div class="texts">
                  <span class="name">{familyTreeList.map(x => x.relationShip === 'father' && x.name)}</span>
                </div>
              </div>
              <div class="profile-card" style={{ top: '-12rem', left: '8.5rem' }}>
                <span class="skill">{familyTreeList.map(x => x.relationShip === 'mother' && x.relationShip)}</span>
                <Button
                  id="addProfileBtn"
                  className="addProfileBtn"
                  onClick={(e) => openProfileModal('mother')}>Mother
                </Button>
                <div class="image">
                  <img src="assets/profileImage.jpg" alt="" class="profile-image" />
                </div>

                <div class="texts">
                  <span class="name">{familyTreeList.map(x => x.relationShip === 'mother' && x.name)}</span>
                  {/* <span class="skill">{profileModalFormData.relationShip}</span> */}
                </div>
              </div>
            </div>
            <div
              id='parentLinkLine'
              className='parentLine'
              style={{
                display: "none", top: '-57px',
              }}
            ></div>
            <div
              className="tooltip"
              style={{ top: '-55px' }}
            >Father & Mother</div>
            <button
              style={{ marginTop: '-15px', marginLeft: '11px' }}
              id="showButton"
              className="button showButton"
              onClick={(e) => handleChildRoot(e, 0, 'Father & Mother')}
            >+
            </button>
          </div>
          {/* <div id="img-container">
          <i className="fa-solid fa-user" style={{ color: "#ff91a4" }}></i>
        </div> */}
          <div className="title-contain">
            <div className="wrap">

              <div className='parentWigit' style={{ display: 'none' }}>
                <div class="profile-card" style={{ left: '-9.5rem', top: '-7rem' }}>
                  <Button
                    id="addProfileBtn"
                    className="addProfileBtn"
                    onClick={(e) => openProfileModal('brother')}>Brother
                  </Button>
                  <div class="image">
                    <img src="assets/profileImage.jpg" alt="" class="profile-image" />
                  </div>

                  <div class="texts">
                    <span class="name">{familyTreeList.map(x => x.relationShip === 'brother' && x.name)}</span>
                  </div>
                </div>
                <div class="profile-card" style={{ left: '-9.5rem' }}>
                  <Button
                    id="addProfileBtn"
                    className="addProfileBtn"
                    onClick={(e) => openProfileModal('sister')}>Sister
                  </Button>
                  <div class="image">
                    <img src="assets/profileImage.jpg" alt="" class="profile-image" />
                  </div>

                  <div class="texts">
                    <span class="name">{familyTreeList.map(x => x.relationShip === 'sister' && x.name)}</span>
                  </div>
                </div>
              </div>
              <div
                id='parentLinkLine'
                className='parentLine'
                style={{
                  display: "none", top: '24px', right: '12rem',
                  transform: 'rotate(-90deg)'
                }}
              ></div>
              <div
                className="tooltip"
                style={{ left: '-150px' }}
              >Brother & Sister</div>
              <button
                style={{ marginLeft: '-22px' }}
                id="showButton"
                className="button showButton"
                onClick={(e) => handleChildRoot(e, 1, 'Brother & Sister')}>+
              </button>
            </div>
            <h1 id="cardTitle">Login User</h1>
            <div className="wrap">
              <div className='parentWigit' style={{ display: 'none' }}>
                <div class="profile-card" style={{ right: '-11rem', top: '-7rem' }}>
                  <Button
                    id="addProfileBtn"
                    className="addProfileBtn"
                    onClick={(e) => openProfileModal('wife')}>Wife
                  </Button>
                  <div class="image">
                    <img src="assets/profileImage.jpg" alt="" class="profile-image" />
                  </div>

                  <div class="texts">
                    <span class="name">{familyTreeList.map(x => x.relationShip === 'wife' && x.name)}</span>
                  </div>
                </div>
                <div class="profile-card" style={{ right: '-11rem' }}>
                  <Button
                    id="addProfileBtn"
                    className="addProfileBtn"
                    onClick={(e) => openProfileModal('Ex.Wife')}>Ex.Wife
                  </Button>
                  <div class="image">
                    <img src="assets/profileImage.jpg" alt="" class="profile-image" />
                  </div>

                  <div class="texts">
                    <span class="name">{familyTreeList.map(x => x.relationShip === 'Ex.Wife' && x.name)}</span>
                  </div>
                </div>
              </div>
              <button
                style={{ marginRight: '-22px' }}
                id="showButton"
                className="button showButton"
                onClick={(e) => handleChildRoot(e, 2, 'Wife')}>+
              </button>
              <div
                id='parentLinkLine'
                className='parentLine'
                style={{
                  display: "none", top: '15px', left: '12rem',
                  transform: 'rotate(90deg)'
                }}
              ></div>
              <div
                className="tooltip"
                style={{ right: '-150px' }}
              >Wife</div>
            </div>
          </div>
          <div className="wrap">
            <div className='parentWigit' style={{ display: 'none' }}>
              <div class="profile-card" style={{ left: '1rem', bottom: '-11rem' }}>
                <Button
                  id="addProfileBtn"
                  className="addProfileBtn"
                  onClick={(e) => openProfileModal('son')}>Son
                </Button>
                <div class="image">
                  <img src="assets/profileImage.jpg" alt="" class="profile-image" />
                </div>

                <div class="texts">
                  <span class="name">{familyTreeList.map(x => x.relationShip === 'son' && x.name)}</span>
                </div>
              </div>
              <div class="profile-card" style={{ bottom: '-11rem', left: '9rem' }}>
                <Button
                  id="addProfileBtn"
                  className="addProfileBtn"
                  onClick={(e) => openProfileModal('daughter')}>Daughter
                </Button>
                <div class="image">
                  <img src="assets/profileImage.jpg" alt="" class="profile-image" />
                </div>

                <div class="texts">
                  <span class="name">{familyTreeList.map(x => x.relationShip === 'daughter' && x.name)}</span>
                </div>
              </div>
            </div>
            <button
              style={{ marginBottom: '-15px' }}
              id="showButton"
              className="button showButton"
              onClick={(e) => handleChildRoot(e, 3, 'Son & Daughter')}>+
            </button>
            <div
              id='parentLinkLine'
              className='parentLine'
              style={{
                display: "none", bottom: '-57px',
                right: '41px',
                transform: 'rotate(-180deg)'
              }}
            ></div>
            <div
              className="tooltip"
              style={{ bottom: '-55px' }}
            >Son & Daughter</div>
          </div>
        </div>

        {/* <div class="profile-card">
          <div class="image">
            <img src="assets/profileImage.jpg" alt="" class="profile-image" />
          </div>

          <div class="texts">
            <span class="name">Sasi{profileModalFormData.name}</span>
            <span class="skill">Mobile : {profileModalFormData.mobile}</span>
            <span class="skill">Email : {profileModalFormData.email}</span>
            <span class="skill">DOB : {profileModalFormData.dateOfBirth}</span>
            <span class="skill">Age : {profileModalFormData.age}</span>
            <span class="skill">Gender : {profileModalFormData.gender}</span>
            <span class="skill">Relationship : {profileModalFormData.relationShip}</span>
          </div>
        </div> */}
      </div>


      <Col md='12' lg='12' sm='12'>
        <Modal isOpen={isProfileModalOpen}>
          <ModalHeader toggle={closeProfileModal}>
            Family Role - {relationShipTitle}
          </ModalHeader>
          <ModalBody>
            <div class="form-container">
              <form action="" id="profileForm">
                <div class="column-left">
                  <Col>
                    <Label for="name">Name:</Label>
                    <Input type="text" name="name" id="name" required
                      onChange={(e) => updateFieldState(e)}
                      value={profileModalFormData.name}
                    />
                  </Col>
                  <Col>
                    <Label for="mobile">Mobile:</Label>
                    <Input
                      onChange={(e) => updateFieldState(e)}
                      value={profileModalFormData.mobile}
                      type="number" name="mobile" id="mobile" required />
                  </Col>
                  <Col>
                    <Label for="email">Email:</Label>
                    <Input
                      onChange={(e) => updateFieldState(e)}
                      value={profileModalFormData.email}
                      type="email" name="email" id="email" required />
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <Label for="relationShip">Relationship:</Label>
                        <Input
                          onChange={(e) => updateFieldState(e)}
                          value={profileModalFormData.relationShip}
                          type="text" name="relationShip" id="relationShip" required />
                      </Col>
                      <Col>
                        <Label for="gender">Gender:</Label>
                        <select
                          onChange={(e) => updateFieldState(e)}
                          value={profileModalFormData.gender}
                          name="gender" id="gender" required>
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <Label for="dateOfBirth">Date Of Birth:</Label>
                        <Input
                          onChange={(e) => updateFieldState(e)}
                          value={profileModalFormData.dateOfBirth}
                          type="date" name="dateOfBirth" id="dateOfBirth" required />
                      </Col>
                      <Col>
                        <Label for="age">Age:</Label>
                        <Input type="number" name="age" id="age" required
                          value={profileModalFormData.age}
                          onChange={(e) => updateFieldState(e)}
                        />
                      </Col>
                    </Row>
                  </Col>

                </div>

                <div class="column-right">
                  <Label for="photo">Profile Picture:</Label>
                  <Input type="file" name="photo" id="photo"
                    onChange={displayProfilePic}
                  />
                  <img src="#" alt="Profile Picture" style={{ display: "none" }} id="profilePic" />
                </div>
              </form>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="profileFormCardFooter">
              <button
                className="profileFormCardBtn"
                type="button"
                onClick={submitForm}
              >
                Submit
              </button>
              <button
                className="profileFormCardBtn"
                type="button"
                onClick={closeProfileModal}
              >
                Cancel
              </button>
            </div>
          </ModalFooter>
        </Modal>
      </Col>
    </div>
  )
}


// function getCardHoverCss() {
//   const cardMouseHover = document.querySelectorAll('button');
//   console.log('cardMouseHover', { cardMouseHover });
//   cardMouseHover.classList.add('cardHover');
// }


// onmouseout

// const parentCardHover = document.querySelector('.card-style');
// parentCardHover.onMouseOver = () => {
//   const showButton = document.querySelector('.button');
//   showButton.classList.add('cardHover');
// }


// // parentCardHover.addEventListener(('onmouseout'))
// parentCardHover.onMouseOut = () => {
//   showButton.classList.remove('.cardHover');
// }
