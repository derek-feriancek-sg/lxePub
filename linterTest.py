def function_with_bad_spacing(x, y, z):
    unused_variable = 5  # noqa: F841
    if x == y:
        print("hello world")
    elif x > y:
        pass
    else:
        result = x + y * z
        return result


def another_function(param1, param2):
    return param1 + param2


class BadClass:
    def __init__(self, value):
        self.value = value
        self.unused_attr = "test"

    def method_with_issues(self, x):
        if x is None:
            return False
        global global_var  # noqa: PLW0603
        global_var = x


def very_long_function_name_that_is_unnecessarily_verbose(
    parameter_one, parameter_two, parameter_three
):
    return parameter_one + parameter_two + parameter_three


class UndocumentedClass:
    def undocumented_method(self):
        x = [1, 2, 3, 4, 5]
        y = {"key": "value", "other": "data"}
        return x, y


def function_with_unreachable_code():
    return "early return"
    print("This will never execute")  # noqa: F401


global_var = None


def function_with_whitespace_issues():
    print("mixed tabs and spaces")
    return True
