<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(): Response
    {
        throw $this->createNotFoundException('Cette page n\'existe pas');
        // return $this->redirect('http://localhost:8080/');
    } 
}
