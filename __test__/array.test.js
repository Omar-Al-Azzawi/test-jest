const { arr, names, jobs } = require("../array");

describe("test array", () => {
  it("should return an array", () => {
    expect(arr).toBeDefined();
  });
  it("test names array", () => {
    expect(names).toEqual(["John", "Jane", "Joe"]);
  });
  it("test jobs array", () => {
    expect(jobs).toEqual(["Developer", "Designer", "Manager"]);
  });
  it("push to the names array", () => {
    expect(names).toHaveLength(3);
    names.push("John");
    expect(names).toHaveLength(4);
  });
  it("push to the jobs array", () => {
    expect(jobs).toHaveLength(3);
    jobs.push("Developer");
    expect(jobs).toHaveLength(4);
  });
  it("delete from the names array", () => {
    expect(names).toHaveLength(4);
    names.pop();
    expect(names).toHaveLength(3);
  });
  it("test the for loop array", () => {
    expect(names).toHaveLength(3);
    for (let i = 0; i < names.length; i++) {
      console.log(names[i] + " is a " + jobs[i]);
    }
  });
});

describe("test the loop function", () => {
  for (let i = 0; i < names.length; i++) {
    it(`should return ${names[i]}`, () => {
      expect(names[i]).toBe(names[i]);
    });
    it(`should return ${jobs[i]}`, () => {
      expect(jobs[i]).toBe(jobs[i]);
    });
    it(`should return ${names[i]} is a ${jobs[i]}`, () => {
      expect(names[i] + " is a " + jobs[i]).toEqual(
        names[i] + " is a " + jobs[i]
      );
    });
    it("sould return", () => {
      expect(names[i] + " is a " + jobs[i]).toEqual(
        names[i] + " is a " + jobs[i]
      );
    });
    it.each(names)(`should return ${names[i]}`, () => {
      expect(names[i]).toBe(names[i]);
    });
    it.each(jobs)(`should return ${jobs[i]}`, () => {
      expect(jobs[i]).toBe(jobs[i]);
    });
    for (let i = 0; i < names.length; i++) {
      it(`should return ${names[i]} is a ${jobs[i]}`, () => {
        expect(names[i] + " is a " + jobs[i]).toEqual(
          names[i] + " is a " + jobs[i]
        );
      });
    }
  }
});
