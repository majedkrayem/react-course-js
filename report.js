const withStatus = students => {
  const result = [];

  for (const student of students) {
    const updatedStudent = {
      ...student,
      status: student.grade >= 56 ? "pass" : "fail"
    };

    result.push(updatedStudent);
  }

  return result;
};

export default withStatus;