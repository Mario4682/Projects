class Library:
    def __init__(self, ListBooks):
        self.books = ListBooks

    def displayAvailableBooks(self):
        print(f"\nThere are {len(self.books)} books Available \n")
        for book in self.books:
            print("->" + book)
        print("\n")

    def borrowbooks(self, name, bookname):
        if bookname not in self.books:
            print("\nbooks is issued by someone")
        else:
            track.append({name: bookname})
            print("Book issue")
            self.books.remove(bookname)

    def returnBook(self, bookname):
        print("Book return successfully")
        self.books.append(bookname)

    def donateBook(self, bookname):
        print("Thankyou for donating your book")
        self.books.append(bookname)

class Student():

    def issueBook(self):
        print("Do you want to issue book?")
        self.book = input("Enter name of the book which want to issue")
        return self.book

    def returnBook(self):
        print("Do you want to return book?")
        name = input("Enter your name")
        self.book = input("Enter name of the book that you issued")

        if{name: self.book} in track:
            track.remove({name: self.book})
        return self.book

    def donateBook(self):
        print("Do you want to donate book? ")
        self.book = input("Enter name of the books which you want to donate ")
        return self.book

if __name__ == '__main__':
    pillailibrary =Library(["ETI","MAD","MAN","PWP","WBP","EDE","CPE"])
    Student = Student()
    track = []

    print("welcome to Library management system")
    print("what do you want to do: \n1.view books\n2.Issue books\n3.Return books\n4.Donate Book\n5.Track book\n6.Exit")
    while (True):
        try:
            response = int(input("Enter your choice"))

            if response == 1:
                pillailibrary.displayAvailableBooks()

            elif response == 2:
                pillailibrary.borrowbooks(input("Enter your name:"), Student.issueBook())

            elif response == 3:
                pillailibrary.returnBook(Student.returnBook())

            elif response == 4:
                pillailibrary.donateBook(Student.donateBook())

            elif response == 5:
                for i in track:
                    for key, value in i.items():
                        holder = key
                        book = value
                        print(f"{book} book is taken by {holder}.")
                    print("\n")
                    if len(track) == 0:
                        print("No books are issued.\n")

            elif response == 6:
                print("Thanks for using pillai Library")
                print("\nperformed by -Deep Barvekar")
                exit()

            else:
                print("wrong choice")

        except Exception as e:
            print(e)




