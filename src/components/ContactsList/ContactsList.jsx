// import { toast } from 'react-toastify';
// import { useEffect, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { getLoading, getError, getVisibleContacts } from 'redux/selectors';
// import { deleteContact, fetchContacts, editContact } from 'redux/operations';

// import {
//   ListOfContact,
//   Items,
//   DeleteButton,
//   EditBtn,
// } from './ContactsList.styled';

// const ContactsList = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getLoading);
//   const error = useSelector(getError);
//   const [editingContact, setEditingContact] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   useEffect(() => {
//     if (!isEditing) {
//       dispatch(fetchContacts());
//     }
//   }, [dispatch, isEditing]);

//   const visibleContacts = useSelector(getVisibleContacts);

//   const handleDelete = contactId => {
//     const confirmation = window.confirm('Are you want to delete this contact?');
//     if (confirmation) {
//       dispatch(deleteContact(contactId));
//       toast.error('One contact has been deleted');
//     }
//   };

//   const handleEdit = contact => {
//     setEditingContact(contact);
//     setIsEditing(true);
//   };

//   const handleSave = editedContact => {
//     dispatch(editContact(editedContact));
//     toast.success(`Contact edit successfully`);
//     setIsEditing(false);
//   };

//   return (
//     <ListOfContact>
//       {isLoading && !error && <b>Loading...</b>}
//       {visibleContacts.map(({ id, name, number }) => (
//         <Items key={id}>
//           {isEditing && editingContact?.id === id ? (
//             <>
//               <input
//                 type="text"
//                 value={editingContact.name}
//                 onChange={e =>
//                   setEditingContact({
//                     ...editingContact,
//                     name: e.target.value,
//                   })
//                 }
//               />
//               <input
//                 type="text"
//                 value={editingContact.number}
//                 onChange={e =>
//                   setEditingContact({
//                     ...editingContact,
//                     number: e.target.value,
//                   })
//                 }
//               />
//             </>
//           ) : (
//             <>
//               {name}: {number}
//             </>
//           )}
//           <div>
//             {isEditing && editingContact?.id === id ? (
//               <EditBtn onClick={() => handleSave(editingContact)}>
//               </EditBtn>
//             ) : (
//               <EditBtn onClick={() => handleEdit({ id, name, number })}>
//               </EditBtn>
//             )}
//             <DeleteButton type="button" onClick={() => handleDelete(id)}>
//             </DeleteButton>
//           </div>
//         </Items>
//       ))}
//     </ListOfContact>
//   );
// };

// export default ContactsList;


import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLoading, getError } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getVisibleContacts } from 'redux/selectors';

import { ListOfContact, Items, ItemButton } from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(getVisibleContacts);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
    toast.error('One contact has been deleted');
  };

  return (
    <ListOfContact>
      {isLoading && !error && <b>Loading...</b>}
      {visibleContacts.map(({ id, name, number }) => (
        <Items key={id}>
          {name}:<br /> {number}
          <ItemButton type="button" onClick={() => handleDelete(id)}>
            Delete
          </ItemButton>
        </Items>
      ))}
    </ListOfContact>
  );
};

export default ContactsList;