const Addteam = () => {
    return(
        <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>No. of team members</label>
            <input type="number" min="2" max="20" />
        </form>
    );
}