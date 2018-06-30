const syncNotes = () => `mutation syncNotes($input: SyncNotesInput!) {
    syncNotes(input: $input) {
      id
      date
      notes
      todos {
        todoId
        text
        completed
      }
    }
  }`;

export default syncNotes;
