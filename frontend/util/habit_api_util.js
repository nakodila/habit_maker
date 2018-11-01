export const fetchHabits = () => (
  $.ajax({
    method: 'GET',
    url: 'api/habits'
  })
);

export const fetchHabit = id => (
  $.ajax({
    method: 'GET',
    url: `api/habits/${id}`
  })
);

export const createHabit = habit => (
  $.ajax({
    method: 'POST',
    url: 'api/habits',
    data: {habit}
  })
);

export const updateHabit = habit => (
  $.ajax({
    method: 'PATCH',
    url: `api/habits/${habit.id}`,
    data: {habit}
  }));

export const deleteHabit = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/habits/${id}`
  })
);
